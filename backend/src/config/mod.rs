#[derive(Clone, Debug)]
pub struct Config {
    pub database_url: String,
    pub redis_url: String,
    pub jwt_secret: String,
    pub jwt_expiry_hours: i64,
    pub refresh_token_expiry_days: i64,
    pub nonce_ttl_seconds: u64,
}

impl Config {
    pub fn from_env() -> Self {
        Config {
            database_url: std::env::var("DATABASE_URL").expect("DATABASE_URL must be set"),
            redis_url: std::env::var("REDIS_URL").unwrap_or_else(|_| "redis://127.0.0.1:6379".to_string()),
            jwt_secret: std::env::var("JWT_SECRET").expect("JWT_SECRET must be set"),
            jwt_expiry_hours: std::env::var("JWT_EXPIRY_HOURS").ok().and_then(|v| v.parse().ok()).unwrap_or(24),
            refresh_token_expiry_days: std::env::var("REFRESH_TOKEN_EXPIRY_DAYS").ok().and_then(|v| v.parse().ok()).unwrap_or(30),
            nonce_ttl_seconds: std::env::var("NONCE_TTL_SECONDS").ok().and_then(|v| v.parse().ok()).unwrap_or(300),
        }
    }
}
