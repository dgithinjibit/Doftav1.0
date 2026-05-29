# DOFTA - Digital Farmer's Co-operative

<div align="center">

![DOFTA Logo](https://via.placeholder.com/200x200/10b981/ffffff?text=DOFTA)

**A decentralized, AI-driven agricultural platform where farmers and buyers co-own, co-govern, and co-profit.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Backend: Rust](https://img.shields.io/badge/Backend-Rust-orange.svg)](https://www.rust-lang.org/)
[![Frontend: React](https://img.shields.io/badge/Frontend-React-blue.svg)](https://reactjs.org/)
[![Smart Contracts: Solidity](https://img.shields.io/badge/Contracts-Solidity-363636.svg)](https://soliditylang.org/)

[Features](#features) • [Architecture](#architecture) • [Getting Started](#getting-started) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 🌾 Overview

DOFTA is a revolutionary blockchain-based platform that empowers farmers and buyers through:

- **Direct Marketplace**: Connect farmers directly with buyers, eliminating middlemen
- **Token Economy**: Reward sustainable farming practices with WASTE, CARBO, and DOFTA tokens
- **Carbon Credits**: Mint verifiable carbon credits as NFTs using AI-powered verification
- **Governance**: Democratic decision-making through token-weighted voting
- **DeFi Access**: Unlock financial services based on on-chain reputation

## ✨ Features

### For Farmers 🚜
- **Smart Marketplace**: List produce with quality scores and sustainability badges
- **Instant Payments**: Receive payments through blockchain escrow
- **Carbon Monetization**: Convert sustainable practices into tradeable carbon credits
- **Governance Rights**: Vote on platform decisions and policies
- **DeFi Services**: Access loans and staking based on reputation

### For Buyers 🏪
- **Verified Quality**: Purchase produce with transparent quality metrics
- **Sustainability Tracking**: Support eco-friendly farming practices
- **Direct Sourcing**: Build relationships directly with farmers
- **ESG Compliance**: Meet sustainability goals with verified carbon credits

### Platform Features 🌐
- **AI Verification**: Satellite imagery and IoT data analysis for carbon credits
- **Real-time Updates**: WebSocket-powered live marketplace and notifications
- **Mobile-First**: Progressive Web App for farmers on the go
- **Multi-Chain**: Support for Ethereum and Polygon networks

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Dashboard │  │Marketplace│  │Governance│  │  Wallet  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ REST API / WebSocket
┌─────────────────────────────────────────────────────────────┐
│                      Backend (Rust/Axum)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Auth   │  │Marketplace│  │Governance│  │  Carbon  │   │
│  │ Service  │  │  Service  │  │  Service │  │ Service  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer (PostgreSQL)                   │
│  Users • Farms • Listings • Orders • Proposals • Credits    │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                  Blockchain (Ethereum/Polygon)               │
│  WASTE Token • CARBO NFT • DOFTA Token • Smart Contracts    │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- **Backend**: Rust 1.75+ and Cargo
- **Frontend**: Node.js 18+ and npm/yarn
- **Database**: PostgreSQL 16+
- **Cache**: Redis 7+
- **Blockchain**: MetaMask or compatible Web3 wallet

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/dofta.git
cd dofta

# Frontend deployment to Vercel
cd frontend
npm install
npm run build

# Deploy to Vercel
vercel deploy
```

### Frontend Setup for Vercel

```bash
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your production API URLs

# Build for production
npm run build

# Deploy to Vercel
vercel deploy --prod
```

#### Backend Setup (Optional - for API)

```bash
cd backend

# Install dependencies
cargo build

# Set up environment variables
cp .env.example .env
# Edit .env with your production configuration

# Run database migrations
sqlx migrate run

# Build for production
cargo build --release
```

#### Smart Contracts Setup

```bash
cd contracts

# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Deploy to testnet
npx hardhat run scripts/deploy.ts --network polygon-mumbai
```

## 📚 Documentation

- [Architecture Overview](./docs/architecture/system-design.md)
- [API Documentation](./docs/api/openapi.yaml)
- [Database Schema](./docs/architecture/database-schema.md)
- [Smart Contracts](./contracts/README.md)
- [Deployment Guide](./docs/guides/deployment.md)
- [Contributing Guide](./docs/guides/contributing.md)

## 🛠️ Technology Stack

### Backend
- **Framework**: Axum (Rust)
- **Database**: PostgreSQL with SQLx
- **Cache**: Redis
- **Authentication**: JWT + Wallet signatures
- **Blockchain**: ethers-rs

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **State Management**: Zustand + React Query
- **UI Components**: Radix UI + Tailwind CSS
- **Web3**: wagmi + viem
- **Forms**: React Hook Form + Zod

### Smart Contracts
- **Language**: Solidity 0.8.20
- **Framework**: Hardhat
- **Testing**: Hardhat + Chai
- **Networks**: Ethereum, Polygon

### Infrastructure
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: Structured logging with tracing

## 🧪 Testing

### Backend Tests
```bash
cd backend
cargo test                    # Unit tests
cargo test --test '*'         # Integration tests
```

### Frontend Tests
```bash
cd frontend
npm test                      # Unit tests
npm run test:e2e             # E2E tests with Playwright
```

### Smart Contract Tests
```bash
cd contracts
npx hardhat test             # Contract tests
npx hardhat coverage         # Coverage report
```

## 📊 Project Status

- [x] Architecture Design
- [x] Implementation Roadmap
- [ ] Backend Core (In Progress)
- [ ] Frontend Core (In Progress)
- [ ] Smart Contracts (Planned)
- [ ] Testing Suite (Planned)
- [ ] Production Deployment (Planned)

See [IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md) for detailed progress.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/guides/contributing.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- **Rust**: Follow Rust standard style (rustfmt)
- **TypeScript**: ESLint + Prettier configuration
- **Solidity**: Solhint rules

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for farmers worldwide
- Inspired by the cooperative movement
- Powered by blockchain technology
- Developed for the DOFTA project

## 📞 Contact & Support

- **Website**: https://dofta.app
- **Email**: support@dofta.app
- **Discord**: https://discord.gg/dofta
- **Twitter**: [@DOFTAapp](https://twitter.com/DOFTAapp)

## 🗺️ Roadmap

### Phase 1: Foundation (Weeks 1-2) ✅
- [x] Project setup and architecture
- [x] Development environment
- [x] Database schema

### Phase 2: Authentication (Weeks 3-4) 🔄
- [ ] Wallet authentication
- [ ] User profiles
- [ ] Role management

### Phase 3: Marketplace (Weeks 5-6)
- [ ] Listing management
- [ ] Order processing
- [ ] Escrow system

### Phase 4: Token Economy (Weeks 7-8)
- [ ] Token contracts
- [ ] Wallet integration
- [ ] Reward system

### Phase 5: Governance & DeFi (Weeks 9-10)
- [ ] Governance system
- [ ] Voting mechanism
- [ ] DeFi portal

### Phase 6: Production (Weeks 11-14)
- [ ] Testing & QA
- [ ] Performance optimization
- [ ] Production deployment

See [IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md) for complete details.

---

<div align="center">

**Built with 🌱 for a sustainable agricultural future**

[⬆ back to top](#dofta---digital-farmers-co-operative)

</div>
