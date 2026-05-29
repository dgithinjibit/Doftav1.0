# DOFTA Backend

Rust-based backend API for the DOFTA platform using Axum framework.

## Tech Stack

- **Framework**: Axum (async web framework)
- **Database**: PostgreSQL with SQLx
- **Cache**: Redis
- **Blockchain**: ethers-rs for Web3 integration
- **Authentication**: JWT + Wallet signatures

## Prerequisites

- Rust 1.75 or higher
- PostgreSQL 16+
- Redis 7+
- SQLx CLI: `cargo install sqlx-cli`

## Setup

1. **Install dependencies**:
```bash
cargo build
```

2. **Configure environment**:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Setup database**:
```bash
# Create database
createdb dofta

# Run migrations
sqlx migrate run
```

4. **Run the server**:
```bash
cargo run
```

The server will start on `http://localhost:8000`

## Development

### Running tests
```bash
cargo test
```

### Running with auto-reload
```bash
cargo install cargo-watch
cargo watch -x run
```

### Database migrations

Create a new migration:
```bash
sqlx migrate add <migration_name>
```

Run migrations:
```bash
sqlx migrate run
```

Revert last migration:
```bash
sqlx migrate revert
```

## Project Structure

```
backend/
├── src/
│   ├── main.rs              # Application entry point
│   ├── lib.rs               # Library root
│   ├── config/              # Configuration
│   ├── api/                 # API routes and handlers
│   ├── services/            # Business logic
│   ├── models/              # Data models
│   ├── db/                  # Database layer
│   ├── blockchain/          # Blockchain integration
│   ├── utils/               # Utilities
│   └── websocket/           # WebSocket server
├── migrations/              # Database migrations
└── tests/                   # Integration tests
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication
- `POST /api/v1/auth/nonce` - Get nonce for wallet signature
- `POST /api/v1/auth/verify` - Verify signature and get JWT
- `POST /api/v1/auth/refresh` - Refresh JWT token

### Users
- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/me` - Update user profile

### Marketplace
- `GET /api/v1/marketplace/listings` - Get all listings
- `POST /api/v1/marketplace/listings` - Create listing
- `GET /api/v1/marketplace/listings/:id` - Get listing details

### More endpoints coming soon...

## Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - Secret for JWT signing
- `ETHEREUM_RPC_URL` - Ethereum node RPC URL
- `POLYGON_RPC_URL` - Polygon node RPC URL

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `cargo test`
4. Format code: `cargo fmt`
5. Check lints: `cargo clippy`
6. Submit a pull request