# Getting Started with DOFTA

This guide will help you deploy the DOFTA dApp to Vercel and set up the development environment.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Git** - Version control
- **Docker & Docker Compose** - For containerized development
- **Node.js 18+** - For frontend development
- **Rust 1.75+** - For backend development
- **PostgreSQL 16+** - Database (or use Docker)
- **Redis 7+** - Cache (or use Docker)

### Optional but Recommended
- **VS Code** - Recommended IDE
- **Rust Analyzer** - VS Code extension for Rust
- **ESLint** - VS Code extension for JavaScript/TypeScript
- **Prettier** - Code formatter
- **MetaMask** - Browser wallet for testing

## 🚀 Quick Start (Vercel Deployment)

The fastest way to deploy is using Vercel:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/dofta.git
cd dofta/frontend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your production URLs

# 4. Deploy to Vercel
npm install -g vercel
vercel login
vercel deploy --prod
```

**Your application will be live at:**
- Frontend: https://your-project.vercel.app

## 🛠️ Manual Setup

If you prefer to run services individually:

### 1. Database Setup

```bash
# Start PostgreSQL
docker run -d \
  --name dofta-postgres \
  -e POSTGRES_DB=dofta \
  -e POSTGRES_USER=dofta_user \
  -e POSTGRES_PASSWORD=dofta_password \
  -p 5432:5432 \
  postgres:16-alpine

# Start Redis
docker run -d \
  --name dofta-redis \
  -p 6379:6379 \
  redis:7-alpine
```

### 2. Backend Setup

```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Install SQLx CLI (for migrations)
cargo install sqlx-cli --no-default-features --features postgres

# Run database migrations
sqlx migrate run

# Build and run
cargo run
```

The backend will start on http://localhost:8000

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Start development server
npm run dev
```

The frontend will start on http://localhost:5173

## 📁 Project Structure Overview

```
dofta/
├── backend/              # Rust backend (Axum)
│   ├── src/             # Source code
│   ├── migrations/      # Database migrations
│   └── tests/           # Tests
├── frontend/            # React frontend
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   └── tests/          # Tests
├── contracts/          # Smart contracts (coming soon)
├── docs/              # Documentation
└── infrastructure/    # Deployment configs
```

## 🔧 Development Workflow

### Backend Development

```bash
cd backend

# Run with auto-reload
cargo install cargo-watch
cargo watch -x run

# Run tests
cargo test

# Format code
cargo fmt

# Check for issues
cargo clippy

# Run specific test
cargo test test_name
```

### Frontend Development

```bash
cd frontend

# Start dev server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

## 🗄️ Database Management

### Migrations

```bash
cd backend

# Create new migration
sqlx migrate add create_users_table

# Run migrations
sqlx migrate run

# Revert last migration
sqlx migrate revert

# Check migration status
sqlx migrate info
```

### Database Access

```bash
# Connect to PostgreSQL
psql -h localhost -U dofta_user -d dofta

# Or using Docker
docker exec -it dofta-postgres psql -U dofta_user -d dofta
```

## 🧪 Testing

### Backend Tests

```bash
cd backend

# Run all tests
cargo test

# Run with output
cargo test -- --nocapture

# Run specific test file
cargo test --test integration_tests

# Run with coverage
cargo tarpaulin --out Html
```

### Frontend Tests

```bash
cd frontend

# Unit tests
npm test

# E2E tests
npm run test:e2e

# Coverage report
npm test -- --coverage
```

## 🔐 Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgres://dofta_user:dofta_password@localhost:5432/dofta
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
RUST_LOG=info,dofta_backend=debug
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
VITE_CHAIN_ID=137
VITE_WALLETCONNECT_PROJECT_ID=your-project-id
```

## 🌐 Blockchain Setup (Coming Soon)

For blockchain development:

1. Install MetaMask browser extension
2. Connect to test network (Mumbai/Goerli)
3. Get test tokens from faucet
4. Deploy smart contracts
5. Update contract addresses in .env

## 📝 Code Style Guidelines

### Rust
- Follow Rust standard style (rustfmt)
- Use meaningful variable names
- Add documentation comments for public APIs
- Keep functions small and focused

### TypeScript/React
- Use functional components with hooks
- Follow ESLint rules
- Use TypeScript strict mode
- Prefer composition over inheritance

## 🐛 Debugging

### Backend Debugging

```bash
# Enable debug logging
RUST_LOG=debug cargo run

# Use rust-gdb for debugging
rust-gdb target/debug/dofta-backend
```

### Frontend Debugging

- Use React DevTools browser extension
- Use Redux DevTools for state inspection
- Check browser console for errors
- Use VS Code debugger with launch.json

## 📚 Additional Resources

- [Rust Book](https://doc.rust-lang.org/book/)
- [Axum Documentation](https://docs.rs/axum/)
- [React Documentation](https://react.dev/)
- [Wagmi Documentation](https://wagmi.sh/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🆘 Common Issues

### Port Already in Use

```bash
# Find process using port
lsof -i :8000  # or :5173

# Kill process
kill -9 <PID>
```

### Database Connection Failed

```bash
# Check if PostgreSQL is running
docker ps | grep postgres

# Restart PostgreSQL
docker restart dofta-postgres
```

### Node Modules Issues

```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Rust Compilation Errors

```bash
# Clean build artifacts
cargo clean

# Update dependencies
cargo update

# Rebuild
cargo build
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Run tests: `cargo test && npm test`
4. Format code: `cargo fmt && npm run format`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📞 Getting Help

- Check existing documentation in `/docs`
- Search GitHub issues
- Ask in Discord community
- Email: dev@dofta.app

## ✅ Next Steps

After setup, you can:

1. **Explore the codebase** - Read through the code structure
2. **Run the tests** - Ensure everything works
3. **Make a small change** - Try modifying a component
4. **Read the roadmap** - See what features are planned
5. **Pick an issue** - Start contributing!

---

Happy coding! 🚀