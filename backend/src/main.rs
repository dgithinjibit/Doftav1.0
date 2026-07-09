use axum::routing::get;
use axum::Router;
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

mod config;
mod api;
mod services;
mod models;
mod db;
mod blockchain;
mod utils;
mod auth;
mod errors;
mod handlers;
mod middleware;

use config::Config;
use handlers::AppState;

#[tokio::main]
async fn main() {
    // Initialize tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "dofta_backend=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Load configuration
    dotenv::dotenv().ok();

    tracing::info!("Starting DOFTA Backend Server...");

    let config = Config::from_env();

    let db = db::create_pg_pool(&config.database_url)
        .await
        .expect("Failed to connect to Postgres");

    let redis = db::create_redis_pool(&config.redis_url)
        .await
        .expect("Failed to connect to Redis");

    let state = AppState { db, redis, config };

    // Build application router
    let app = Router::new()
        .route("/", get(root))
        .route("/health", get(health_check))
        .route("/healthz", get(health_check))
        .merge(handlers::routes())
        .layer(CorsLayer::permissive())
        .with_state(state);

    // Get server address from environment or use default
    let host = std::env::var("HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
    let port = std::env::var("PORT").unwrap_or_else(|_| "8000".to_string());
    let addr: SocketAddr = format!("{}:{}", host, port)
        .parse()
        .expect("Failed to parse server address");

    tracing::info!("Server listening on {}", addr);

    // Start server
    let listener = tokio::net::TcpListener::bind(addr)
        .await
        .expect("Failed to bind to address");

    axum::serve(listener, app)
        .await
        .expect("Server failed to start");
}

async fn root() -> &'static str {
    "DOFTA Backend API - v1.0.0"
}

async fn health_check() -> &'static str {
    "OK"
}
