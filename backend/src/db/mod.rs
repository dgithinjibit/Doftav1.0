use redis::aio::ConnectionManager;

pub type RedisConn = ConnectionManager;

pub async fn create_redis_pool(redis_url: &str) -> anyhow::Result<RedisConn> {
    let client = redis::Client::open(redis_url)?;
    let conn = ConnectionManager::new(client).await?;
    Ok(conn)
}

pub async fn create_pg_pool(database_url: &str) -> anyhow::Result<sqlx::PgPool> {
    let pool = sqlx::postgres::PgPoolOptions::new()
        .max_connections(10)
        .connect(database_url)
        .await?;
    Ok(pool)
}
