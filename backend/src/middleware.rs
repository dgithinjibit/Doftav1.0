use axum::{
    async_trait,
    extract::FromRequestParts,
    http::{header, request::Parts},
};
use uuid::Uuid;

use crate::auth::models::AuthUser;
use crate::config::Config;
use axum::extract::FromRef;
use crate::errors::AppError;

/// Axum extractor: pulls `AuthUser` from the `Authorization: Bearer <token>` header.
/// Use in handler signatures: `auth: AuthUser`
#[async_trait]
impl<S> FromRequestParts<S> for AuthUser
where
    S: Send + Sync,
    Config: axum::extract::FromRef<S>,
{
    type Rejection = AppError;

    async fn from_request_parts(parts: &mut Parts, state: &S) -> Result<Self, Self::Rejection> {
        let config = Config::from_ref(state);

        // Extract the Bearer token
        let auth_header = parts
            .headers
            .get(header::AUTHORIZATION)
            .and_then(|v| v.to_str().ok())
            .ok_or(AppError::Unauthorized)?;

        let token = auth_header
            .strip_prefix("Bearer ")
            .ok_or(AppError::Unauthorized)?;

        // Validate and decode
        let claims = crate::auth::jwt::validate_token(token, &config.jwt_secret)?;

        // Reject refresh tokens used as access tokens
        if claims.role == "refresh" {
            return Err(AppError::InvalidToken);
        }

        Ok(AuthUser {
            id: Uuid::parse_str(&claims.sub).map_err(|_| AppError::InvalidToken)?,
            wallet: claims.wallet,
            role: claims.role,
        })
    }
}
