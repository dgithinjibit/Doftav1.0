# DOFTA Project Structure Templates

## Complete Directory Structure

```
dofta/
├── backend/                          # Rust backend
│   ├── Cargo.toml
│   ├── Cargo.lock
│   ├── .env.example
│   ├── .gitignore
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── README.md
│   ├── migrations/                   # Database migrations
│   │   ├── 20240101000000_create_users.sql
│   │   ├── 20240101000001_create_farms.sql
│   │   ├── 20240101000002_create_marketplace.sql
│   │   ├── 20240101000003_create_transactions.sql
│   │   ├── 20240101000004_create_governance.sql
│   │   └── 20240101000005_create_carbon_credits.sql
│   ├── src/
│   │   ├── main.rs                   # Application entry point
│   │   ├── lib.rs                    # Library root
│   │   ├── config/                   # Configuration
│   │   │   ├── mod.rs
│   │   │   ├── database.rs           # Database config
│   │   │   ├── redis.rs              # Redis config
│   │   │   ├── blockchain.rs         # Blockchain config
│   │   │   └── settings.rs           # App settings
│   │   ├── api/                      # API layer
│   │   │   ├── mod.rs
│   │   │   ├── routes/               # Route definitions
│   │   │   │   ├── mod.rs
│   │   │   │   ├── auth.rs
│   │   │   │   ├── users.rs
│   │   │   │   ├── marketplace.rs
│   │   │   │   ├── governance.rs
│   │   │   │   ├── carbon.rs
│   │   │   │   ├── defi.rs
│   │   │   │   └── websocket.rs
│   │   │   ├── handlers/             # Request handlers
│   │   │   │   ├── mod.rs
│   │   │   │   ├── auth_handler.rs
│   │   │   │   ├── user_handler.rs
│   │   │   │   ├── marketplace_handler.rs
│   │   │   │   ├── governance_handler.rs
│   │   │   │   ├── carbon_handler.rs
│   │   │   │   └── defi_handler.rs
│   │   │   └── middleware/           # Middleware
│   │   │       ├── mod.rs
│   │   │       ├── auth.rs           # JWT validation
│   │   │       ├── cors.rs           # CORS config
│   │   │       ├── rate_limit.rs     # Rate limiting
│   │   │       └── logging.rs        # Request logging
│   │   ├── services/                 # Business logic
│   │   │   ├── mod.rs
│   │   │   ├── auth_service.rs       # Authentication
│   │   │   ├── user_service.rs       # User management
│   │   │   ├── marketplace_service.rs # Marketplace logic
│   │   │   ├── token_service.rs      # Token operations
│   │   │   ├── governance_service.rs # Governance logic
│   │   │   ├── carbon_service.rs     # Carbon credits
│   │   │   ├── defi_service.rs       # DeFi operations
│   │   │   └── notification_service.rs # Notifications
│   │   ├── models/                   # Data models
│   │   │   ├── mod.rs
│   │   │   ├── user.rs
│   │   │   ├── farm.rs
│   │   │   ├── listing.rs
│   │   │   ├── order.rs
│   │   │   ├── transaction.rs
│   │   │   ├── proposal.rs
│   │   │   ├── vote.rs
│   │   │   └── carbon_credit.rs
│   │   ├── db/                       # Database layer
│   │   │   ├── mod.rs
│   │   │   ├── pool.rs               # Connection pool
│   │   │   └── repositories/         # Data access
│   │   │       ├── mod.rs
│   │   │       ├── user_repository.rs
│   │   │       ├── farm_repository.rs
│   │   │       ├── marketplace_repository.rs
│   │   │       ├── transaction_repository.rs
│   │   │       ├── governance_repository.rs
│   │   │       └── carbon_repository.rs
│   │   ├── blockchain/               # Blockchain integration
│   │   │   ├── mod.rs
│   │   │   ├── client.rs             # Web3 client
│   │   │   ├── contracts/            # Contract ABIs
│   │   │   │   ├── mod.rs
│   │   │   │   ├── waste_token.rs
│   │   │   │   ├── carbo_nft.rs
│   │   │   │   ├── dofta_token.rs
│   │   │   │   ├── marketplace.rs
│   │   │   │   └── governance.rs
│   │   │   ├── events.rs             # Event listeners
│   │   │   └── transactions.rs       # Transaction handling
│   │   ├── utils/                    # Utilities
│   │   │   ├── mod.rs
│   │   │   ├── auth.rs               # Auth helpers
│   │   │   ├── validation.rs         # Input validation
│   │   │   ├── errors.rs             # Error types
│   │   │   ├── crypto.rs             # Cryptography
│   │   │   └── pagination.rs         # Pagination helpers
│   │   └── websocket/                # WebSocket server
│   │       ├── mod.rs
│   │       ├── server.rs
│   │       ├── handlers.rs
│   │       └── messages.rs
│   └── tests/                        # Integration tests
│       ├── common/
│       │   └── mod.rs
│       ├── auth_tests.rs
│       ├── marketplace_tests.rs
│       ├── governance_tests.rs
│       └── carbon_tests.rs
│
├── frontend/                         # React frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── README.md
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── main.tsx                  # Entry point
│   │   ├── App.tsx                   # Root component
│   │   ├── vite-env.d.ts
│   │   ├── app/                      # App configuration
│   │   │   ├── router.tsx            # Route definitions
│   │   │   ├── providers.tsx         # Context providers
│   │   │   └── layouts/              # Layout components
│   │   │       ├── RootLayout.tsx
│   │   │       ├── AuthLayout.tsx
│   │   │       ├── DashboardLayout.tsx
│   │   │       └── MarketplaceLayout.tsx
│   │   ├── features/                 # Feature modules
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ConnectWallet.tsx
│   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   └── ProtectedRoute.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useAuth.ts
│   │   │   │   │   ├── useWallet.ts
│   │   │   │   │   └── useSignMessage.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── authService.ts
│   │   │   │   └── types.ts
│   │   │   ├── onboarding/
│   │   │   │   ├── components/
│   │   │   │   │   ├── RoleSelection.tsx
│   │   │   │   │   ├── ProfileSetup.tsx
│   │   │   │   │   └── FarmRegistration.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useOnboarding.ts
│   │   │   │   └── types.ts
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   │   ├── FarmerDashboard.tsx
│   │   │   │   │   ├── BuyerDashboard.tsx
│   │   │   │   │   ├── StatsCard.tsx
│   │   │   │   │   └── ActivityFeed.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useDashboard.ts
│   │   │   │   └── types.ts
│   │   │   ├── marketplace/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ListingGrid.tsx
│   │   │   │   │   ├── ListingCard.tsx
│   │   │   │   │   ├── ListingDetail.tsx
│   │   │   │   │   ├── CreateListing.tsx
│   │   │   │   │   ├── FilterSidebar.tsx
│   │   │   │   │   └── SearchBar.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useListings.ts
│   │   │   │   │   ├── useCreateListing.ts
│   │   │   │   │   └── useOrders.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── marketplaceService.ts
│   │   │   │   └── types.ts
│   │   │   ├── wallet/
│   │   │   │   ├── components/
│   │   │   │   │   ├── WalletOverview.tsx
│   │   │   │   │   ├── TokenBalance.tsx
│   │   │   │   │   ├── TransactionHistory.tsx
│   │   │   │   │   └── SendTokens.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useWalletBalance.ts
│   │   │   │   │   └── useTransactions.ts
│   │   │   │   └── types.ts
│   │   │   ├── governance/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ProposalList.tsx
│   │   │   │   │   ├── ProposalCard.tsx
│   │   │   │   │   ├── ProposalDetail.tsx
│   │   │   │   │   ├── CreateProposal.tsx
│   │   │   │   │   └── VoteButton.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useProposals.ts
│   │   │   │   │   └── useVote.ts
│   │   │   │   └── types.ts
│   │   │   ├── carbon/
│   │   │   │   ├── components/
│   │   │   │   │   ├── CarbonDashboard.tsx
│   │   │   │   │   ├── VerificationFlow.tsx
│   │   │   │   │   ├── MintNFT.tsx
│   │   │   │   │   └── CreditCard.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useCarbonCredits.ts
│   │   │   │   │   └── useVerification.ts
│   │   │   │   └── types.ts
│   │   │   └── defi/
│   │   │       ├── components/
│   │   │       │   ├── DeFiPortal.tsx
│   │   │       │   ├── CreditScore.tsx
│   │   │       │   ├── LoanApplication.tsx
│   │   │       │   └── StakingInterface.tsx
│   │   │       ├── hooks/
│   │   │       │   ├── useCreditScore.ts
│   │   │       │   └── useStaking.ts
│   │   │       └── types.ts
│   │   ├── shared/                   # Shared resources
│   │   │   ├── components/           # Reusable UI
│   │   │   │   ├── ui/               # Base components
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── Toast.tsx
│   │   │   │   │   ├── Spinner.tsx
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   └── Avatar.tsx
│   │   │   │   ├── layout/           # Layout components
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   └── BottomNav.tsx
│   │   │   │   └── feedback/         # Feedback components
│   │   │   │       ├── ErrorBoundary.tsx
│   │   │   │       ├── LoadingState.tsx
│   │   │   │       └── EmptyState.tsx
│   │   │   ├── hooks/                # Custom hooks
│   │   │   │   ├── useDebounce.ts
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   ├── useMediaQuery.ts
│   │   │   │   ├── useClickOutside.ts
│   │   │   │   └── useIntersectionObserver.ts
│   │   │   ├── utils/                # Utility functions
│   │   │   │   ├── format.ts         # Formatting helpers
│   │   │   │   ├── validation.ts     # Validation helpers
│   │   │   │   ├── date.ts           # Date utilities
│   │   │   │   ├── currency.ts       # Currency formatting
│   │   │   │   └── blockchain.ts     # Blockchain helpers
│   │   │   ├── types/                # Shared types
│   │   │   │   ├── index.ts
│   │   │   │   ├── api.ts
│   │   │   │   ├── user.ts
│   │   │   │   └── common.ts
│   │   │   └── constants/            # Constants
│   │   │       ├── index.ts
│   │   │       ├── routes.ts
│   │   │       ├── tokens.ts
│   │   │       └── config.ts
│   │   ├── lib/                      # Third-party integrations
│   │   │   ├── api/                  # API client
│   │   │   │   ├── client.ts         # Axios instance
│   │   │   │   ├── endpoints.ts      # API endpoints
│   │   │   │   └── interceptors.ts   # Request/response interceptors
│   │   │   ├── blockchain/           # Web3 integration
│   │   │   │   ├── config.ts         # Wagmi config
│   │   │   │   ├── contracts.ts      # Contract instances
│   │   │   │   └── hooks.ts          # Blockchain hooks
│   │   │   └── websocket/            # WebSocket client
│   │   │       ├── client.ts
│   │   │       └── hooks.ts
│   │   ├── stores/                   # State management
│   │   │   ├── authStore.ts          # Auth state
│   │   │   ├── walletStore.ts        # Wallet state
│   │   │   ├── uiStore.ts            # UI state
│   │   │   └── notificationStore.ts  # Notifications
│   │   └── styles/                   # Global styles
│   │       ├── globals.css           # Global CSS
│   │       ├── theme.ts              # Theme config
│   │       └── animations.css        # Animations
│   └── tests/                        # Tests
│       ├── setup.ts
│       ├── unit/
│       │   ├── components/
│       │   └── hooks/
│       ├── integration/
│       │   └── features/
│       └── e2e/
│           └── flows/
│
├── contracts/                        # Smart contracts
│   ├── hardhat.config.ts
│   ├── package.json
│   ├── .env.example
│   ├── contracts/
│   │   ├── tokens/
│   │   │   ├── WASTEToken.sol
│   │   │   ├── CARBOToken.sol
│   │   │   └── DOFTAToken.sol
│   │   ├── Marketplace.sol
│   │   ├── Governance.sol
│   │   ├── CarbonRegistry.sol
│   │   └── Staking.sol
│   ├── scripts/
│   │   ├── deploy.ts
│   │   └── verify.ts
│   └── test/
│       ├── WASTEToken.test.ts
│       ├── Marketplace.test.ts
│       └── Governance.test.ts
│
├── infrastructure/                   # Infrastructure as code
│   ├── docker/
│   │   ├── backend.Dockerfile
│   │   ├── frontend.Dockerfile
│   │   └── nginx.conf
│   ├── kubernetes/
│   │   ├── backend-deployment.yaml
│   │   ├── frontend-deployment.yaml
│   │   ├── postgres-statefulset.yaml
│   │   ├── redis-deployment.yaml
│   │   ├── ingress.yaml
│   │   └── secrets.yaml
│   └── terraform/
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
│
├── .github/                          # GitHub configuration
│   ├── workflows/
│   │   ├── backend-ci.yml
│   │   ├── frontend-ci.yml
│   │   ├── contracts-ci.yml
│   │   └── deploy.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docs/                             # Documentation
│   ├── api/
│   │   └── openapi.yaml
│   ├── architecture/
│   │   ├── system-design.md
│   │   └── database-schema.md
│   ├── guides/
│   │   ├── getting-started.md
│   │   ├── deployment.md
│   │   └── contributing.md
│   └── user/
│       ├── farmer-guide.md
│       └── buyer-guide.md
│
├── scripts/                          # Utility scripts
│   ├── setup-dev.sh
│   ├── run-tests.sh
│   ├── deploy-staging.sh
│   └── backup-db.sh
│
├── .gitignore
├── .env.example
├── docker-compose.yml                # Development environment
├── docker-compose.prod.yml           # Production environment
├── README.md
├── LICENSE
└── CHANGELOG.md
```

---

## Key Files Content Templates

### Backend: `Cargo.toml`

```toml
[package]
name = "dofta-backend"
version = "1.0.0"
edition = "2021"

[dependencies]
# Web framework
axum = { version = "0.7", features = ["macros", "ws"] }
tokio = { version = "1", features = ["full"] }
tower = "0.4"
tower-http = { version = "0.5", features = ["cors", "trace", "compression-gzip"] }

# Database
sqlx = { version = "0.7", features = ["postgres", "runtime-tokio-native-tls", "uuid", "chrono", "json"] }

# Serialization
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

# Authentication
jsonwebtoken = "9"
bcrypt = "0.15"

# Utilities
uuid = { version = "1.0", features = ["v4", "serde"] }
chrono = { version = "0.4", features = ["serde"] }
dotenv = "0.15"
anyhow = "1.0"
thiserror = "1.0"

# Logging
tracing = "0.1"
tracing-subscriber = { version = "0.3", features = ["env-filter"] }

# Redis
redis = { version = "0.24", features = ["tokio-comp", "connection-manager"] }

# Blockchain
ethers = { version = "2.0", features = ["ws", "rustls"] }

# Validation
validator = { version = "0.16", features = ["derive"] }

[dev-dependencies]
tokio-test = "0.4"
```

### Frontend: `package.json`

```json
{
  "name": "dofta-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.22.0",
    "zustand": "^4.5.0",
    "@tanstack/react-query": "^5.28.0",
    "wagmi": "^2.5.0",
    "viem": "^2.8.0",
    "@rainbow-me/rainbowkit": "^2.0.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-toast": "^1.1.5",
    "react-hook-form": "^7.51.0",
    "zod": "^3.22.0",
    "axios": "^1.6.0",
    "date-fns": "^3.3.0",
    "recharts": "^2.12.0",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.0",
    "prettier": "^3.2.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0",
    "vite": "^5.1.0",
    "vitest": "^1.3.0",
    "@testing-library/react": "^14.2.0",
    "@testing-library/jest-dom": "^6.4.0",
    "@playwright/test": "^1.42.0"
  }
}
```

### Root: `docker-compose.yml`

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: dofta-postgres
    environment:
      POSTGRES_DB: dofta
      POSTGRES_USER: dofta_user
      POSTGRES_PASSWORD: dofta_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U dofta_user"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: dofta-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: dofta-backend
    environment:
      DATABASE_URL: postgres://dofta_user:dofta_password@postgres:5432/dofta
      REDIS_URL: redis://redis:6379
      JWT_SECRET: your-secret-key-change-in-production
      RUST_LOG: info
    ports:
      - "8000:8000"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./backend:/app
    command: cargo run

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: dofta-frontend
    environment:
      VITE_API_URL: http://localhost:8000
      VITE_WS_URL: ws://localhost:8000
    ports:
      - "5173:5173"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    command: npm run dev

volumes:
  postgres_data:
  redis_data:
```

### Backend: `.env.example`

```env
# Server
HOST=0.0.0.0
PORT=8000
RUST_LOG=info

# Database
DATABASE_URL=postgres://dofta_user:dofta_password@localhost:5432/dofta
DATABASE_MAX_CONNECTIONS=10

# Redis
REDIS_URL=redis://localhost:6379
REDIS_POOL_SIZE=10

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRATION=3600
REFRESH_TOKEN_EXPIRATION=604800

# Blockchain
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_KEY
POLYGON_RPC_URL=https://polygon-rpc.com
CHAIN_ID=137
PRIVATE_KEY=your-private-key-for-backend-operations

# Contract Addresses
WASTE_TOKEN_ADDRESS=0x...
CARBO_NFT_ADDRESS=0x...
DOFTA_TOKEN_ADDRESS=0x...
MARKETPLACE_ADDRESS=0x...
GOVERNANCE_ADDRESS=0x...

# IPFS
IPFS_API_URL=https://ipfs.infura.io:5001
IPFS_GATEWAY=https://ipfs.io/ipfs/

# AWS S3 (for image uploads)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=dofta-uploads

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Rate Limiting
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173,https://dofta.app
```

### Frontend: `.env.example`

```env
# API
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000

# Blockchain
VITE_CHAIN_ID=137
VITE_ETHEREUM_RPC=https://mainnet.infura.io/v3/YOUR_INFURA_KEY
VITE_POLYGON_RPC=https://polygon-rpc.com

# Contract Addresses
VITE_WASTE_TOKEN_ADDRESS=0x...
VITE_CARBO_NFT_ADDRESS=0x...
VITE_DOFTA_TOKEN_ADDRESS=0x...
VITE_MARKETPLACE_ADDRESS=0x...
VITE_GOVERNANCE_ADDRESS=0x...

# WalletConnect
VITE_WALLETCONNECT_PROJECT_ID=your-project-id

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Feature Flags
VITE_ENABLE_GOVERNANCE=true
VITE_ENABLE_CARBON_CREDITS=true
VITE_ENABLE_DEFI=true
```

---

## File Naming Conventions

### Backend (Rust)
- **Files**: `snake_case.rs`
- **Modules**: `snake_case`
- **Structs**: `PascalCase`
- **Functions**: `snake_case`
- **Constants**: `SCREAMING_SNAKE_CASE`

### Frontend (TypeScript/React)
- **Components**: `PascalCase.tsx`
- **Hooks**: `useCamelCase.ts`
- **Utils**: `camelCase.ts`
- **Types**: `PascalCase` or `camelCase.ts`
- **Constants**: `SCREAMING_SNAKE_CASE`

### Database
- **Tables**: `snake_case` (plural)
- **Columns**: `snake_case`
- **Indexes**: `idx_table_column`
- **Foreign Keys**: `fk_table_column`

---

## Code Organization Principles

### 1. Feature-Based Structure
- Group related code by feature/domain
- Each feature is self-contained
- Shared code goes in `shared/` or `lib/`

### 2. Separation of Concerns
- **API Layer**: HTTP handling, validation
- **Service Layer**: Business logic
- **Data Layer**: Database operations
- **Models**: Data structures

### 3. Dependency Direction
```
API → Services → Repositories → Database
     ↓
   Models
```

### 4. Testing Structure
- Mirror source structure in tests
- Unit tests alongside code
- Integration tests in separate directory
- E2E tests for critical flows

---

## Next Steps

1. Create the directory structure
2. Set up configuration files
3. Initialize Git repository
4. Set up development environment
5. Begin Phase 1 implementation

This structure provides a solid foundation for a production-ready application with clear separation of concerns and scalability in mind.