use axum::{extract::State, Json};
use chrono::Utc;
use ethers::core::types::{Signature, H160};
use rand::Rng;
use redis::AsyncCommands;
use sqlx::PgPool;
use std::str::FromStr;
use uuid::Uuid;

use crate::auth::jwt::{create_access_token, create_refresh_token, validate_token};
use crate::auth::models::*;
use crate::config::Config;
use crate::db::RedisConn;
use crate::errors::{AppError, AppResult};
use crate::models::User;

/// Shared app state injected into handlers
#[derive(Clone)]
pub struct AppState {
    pub db: PgPool,
    pub redis: RedisConn,
    pub config: Config,
}

impl axum::extract::FromRef<AppState> for Config {
    fn from_ref(state: &AppState) -> Self {
        state.config.clone()
    }
}

// ─── POST /auth/nonce ─────────────────────────────────────────────────────────
/// Step 1: Generate a nonce for the wallet to sign.
/// Stores it in Redis with a TTL so it expires automatically.
pub async fn get_nonce(
    State(state): State<AppState>,
    Json(req): Json<NonceRequest>,
) -> AppResult<Json<NonceResponse>> {
    let wallet = req.wallet_address.to_lowercase();

    // Validate it looks like an ETH address
    if !wallet.starts_with("0x") || wallet.len() != 42 {
        return Err(AppError::Validation("Invalid wallet address".to_string()));
    }

    // Generate 32-byte random nonce
    let nonce_bytes: [u8; 32] = rand::thread_rng().gen();
    let nonce = hex::encode(nonce_bytes);

    // Store in Redis: key = "nonce:{wallet}", value = nonce, TTL = 5 min
    let redis_key = format!("nonce:{wallet}");
    let mut redis = state.redis.clone();
    redis
        .set_ex::<_, _, ()>(&redis_key, &nonce, state.config.nonce_ttl_seconds)
        .await
        .map_err(AppError::Redis)?;

    let message = format!(
        "Welcome to DOFTA!\n\nSign this message to authenticate.\n\nNonce: {nonce}\nTimestamp: {}",
        Utc::now().to_rfc3339()
    );

    tracing::debug!("Nonce generated for wallet {wallet}");

    Ok(Json(NonceResponse { nonce, message }))
}

// ─── POST /auth/verify ────────────────────────────────────────────────────────
/// Step 2: Verify the signed nonce and issue JWTs.
pub async fn verify_signature(
    State(state): State<AppState>,
    Json(req): Json<VerifyRequest>,
) -> AppResult<Json<AuthResponse>> {
    let wallet = req.wallet_address.to_lowercase();

    // 1. Retrieve nonce from Redis
    let redis_key = format!("nonce:{wallet}");
    let mut redis = state.redis.clone();

    let stored_nonce: Option<String> = redis
        .get(&redis_key)
        .await
        .map_err(AppError::Redis)?;

    let stored_nonce = stored_nonce.ok_or(AppError::InvalidNonce)?;

    // 2. Verify nonce matches
    if stored_nonce != req.nonce {
        return Err(AppError::InvalidNonce);
    }

    // 3. Verify Ethereum signature using ethers-rs
    let message = format!(
        "Welcome to DOFTA!\n\nSign this message to authenticate.\n\nNonce: {}",
        req.nonce
    );

    let recovered_wallet = recover_signer(&message, &req.signature)
        .map_err(|_| AppError::SignatureVerificationFailed)?;

    if recovered_wallet.to_lowercase() != wallet {
        return Err(AppError::SignatureVerificationFailed);
    }

    // 4. Delete nonce (one-time use)
    redis
        .del::<_, ()>(&redis_key)
        .await
        .map_err(AppError::Redis)?;

    // 5. Upsert user in DB (create on first login, return existing on subsequent)
    let user = upsert_user(&state.db, &wallet).await?;

    // 6. Issue tokens
    let access_token = create_access_token(
        user.id,
        &user.wallet_address,
        &user.role,
        &state.config.jwt_secret,
        state.config.jwt_expiry_hours,
    )?;

    let refresh_token = create_refresh_token(
        user.id,
        &state.config.jwt_secret,
        state.config.refresh_token_expiry_days,
    )?;

    // 7. Store refresh token in Redis for invalidation support
    let refresh_key = format!("refresh:{}", user.id);
    redis
        .set_ex::<_, _, ()>(
            &refresh_key,
            &refresh_token,
            (state.config.refresh_token_expiry_days * 86400) as u64,
        )
        .await
        .map_err(AppError::Redis)?;

    tracing::info!("User authenticated: wallet={wallet} id={}", user.id);

    Ok(Json(AuthResponse {
        access_token,
        refresh_token,
        token_type: "Bearer".to_string(),
        expires_in: state.config.jwt_expiry_hours * 3600,
        user: user.into(),
    }))
}

// ─── POST /auth/refresh ───────────────────────────────────────────────────────
pub async fn refresh_token(
    State(state): State<AppState>,
    Json(req): Json<RefreshRequest>,
) -> AppResult<Json<AuthResponse>> {
    // 1. Validate refresh token
    let claims = validate_token(&req.refresh_token, &state.config.jwt_secret)?;

    if claims.role != "refresh" {
        return Err(AppError::InvalidToken);
    }

    let user_id = Uuid::parse_str(&claims.sub).map_err(|_| AppError::InvalidToken)?;

    // 2. Check it matches what's stored in Redis
    let refresh_key = format!("refresh:{user_id}");
    let mut redis = state.redis.clone();
    let stored: Option<String> = redis.get(&refresh_key).await.map_err(AppError::Redis)?;

    if stored.as_deref() != Some(&req.refresh_token) {
        return Err(AppError::InvalidToken);
    }

    // 3. Fetch current user from DB
    let user = sqlx::query_as::<_, User>(
        "SELECT * FROM users WHERE id = $1 AND is_active = true",
    )
    .bind(user_id)
    .fetch_optional(&state.db)
    .await?
    .ok_or_else(|| AppError::NotFound("User not found".to_string()))?;

    // 4. Issue new access token
    let access_token = create_access_token(
        user.id,
        &user.wallet_address,
        &user.role,
        &state.config.jwt_secret,
        state.config.jwt_expiry_hours,
    )?;

    // Rotate refresh token
    let new_refresh = create_refresh_token(
        user.id,
        &state.config.jwt_secret,
        state.config.refresh_token_expiry_days,
    )?;

    redis
        .set_ex::<_, _, ()>(
            &refresh_key,
            &new_refresh,
            (state.config.refresh_token_expiry_days * 86400) as u64,
        )
        .await
        .map_err(AppError::Redis)?;

    Ok(Json(AuthResponse {
        access_token,
        refresh_token: new_refresh,
        token_type: "Bearer".to_string(),
        expires_in: state.config.jwt_expiry_hours * 3600,
        user: user.into(),
    }))
}

// ─── POST /auth/logout ────────────────────────────────────────────────────────
pub async fn logout(
    State(state): State<AppState>,
    auth: AuthUser,
) -> AppResult<Json<serde_json::Value>> {
    let mut redis = state.redis.clone();
    let refresh_key = format!("refresh:{}", auth.id);
    redis.del::<_, ()>(&refresh_key).await.map_err(AppError::Redis)?;

    tracing::info!("User logged out: id={}", auth.id);
    Ok(Json(serde_json::json!({ "message": "Logged out successfully" })))
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/// Recover the signer's wallet address from a message + signature.
/// Uses Ethereum's personal_sign prefix internally.
fn recover_signer(message: &str, signature_hex: &str) -> anyhow::Result<String> {
    let sig = Signature::from_str(signature_hex)?;

    // ethers-rs handles the "\x19Ethereum Signed Message:\n" prefix automatically
    let recovered: H160 = sig.recover(message)?;

    Ok(format!("{recovered:#x}"))
}

/// Create user on first login, return existing user on subsequent logins.
async fn upsert_user(db: &PgPool, wallet: &str) -> AppResult<User> {
    let user = sqlx::query_as::<_, User>(
        r#"
        INSERT INTO users (id, wallet_address, role, reputation_score, is_active, created_at, updated_at)
        VALUES ($1, $2, 'farmer', 0, true, NOW(), NOW())
        ON CONFLICT (wallet_address) DO UPDATE
            SET updated_at = NOW()
        RETURNING *
        "#,
    )
    .bind(Uuid::new_v4())
    .bind(wallet)
    .fetch_one(db)
    .await?;

    Ok(user)
}

// ─── Routes ───────────────────────────────────────────────────────────────────
pub fn routes() -> axum::Router<AppState> {
    use axum::routing::post;
    axum::Router::new()
        .route("/auth/nonce", post(get_nonce))
        .route("/auth/verify", post(verify_signature))
        .route("/auth/refresh", post(refresh_token))
        .route("/auth/logout", post(logout))
}
