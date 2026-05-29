# DOFTA Frontend

React + TypeScript frontend for the DOFTA platform.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: Zustand + React Query
- **UI Components**: Radix UI + Tailwind CSS
- **Web3**: wagmi + viem + RainbowKit
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment**:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Run development server**:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

### Project Structure

```
frontend/
├── src/
│   ├── main.tsx                 # Application entry point
│   ├── App.tsx                  # Root component
│   ├── app/                     # App configuration
│   │   ├── router.tsx           # Route definitions
│   │   ├── providers.tsx        # Context providers
│   │   └── layouts/             # Layout components
│   ├── features/                # Feature modules
│   │   ├── auth/                # Authentication
│   │   ├── dashboard/           # Dashboard
│   │   ├── marketplace/         # Marketplace
│   │   ├── wallet/              # Wallet
│   │   ├── governance/          # Governance
│   │   ├── carbon/              # Carbon credits
│   │   └── defi/                # DeFi portal
│   ├── shared/                  # Shared resources
│   │   ├── components/          # Reusable components
│   │   ├── hooks/               # Custom hooks
│   │   ├── utils/               # Utility functions
│   │   ├── types/               # TypeScript types
│   │   └── constants/           # Constants
│   ├── lib/                     # Third-party integrations
│   │   ├── api/                 # API client
│   │   ├── blockchain/          # Web3 integration
│   │   └── websocket/           # WebSocket client
│   ├── stores/                  # State management
│   └── styles/                  # Global styles
├── public/                      # Static assets
└── tests/                       # Tests
```

### Code Organization

#### Feature-Based Structure
Each feature is self-contained with its own:
- Components
- Hooks
- Services
- Types

#### Path Aliases
```typescript
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/features/auth/hooks/useAuth'
import { apiClient } from '@/lib/api/client'
```

### Styling

We use Tailwind CSS with a custom theme:

```tsx
// Example component
export function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {children}
    </div>
  )
}
```

### State Management

#### Zustand for Client State
```typescript
// stores/authStore.ts
import { create } from 'zustand'

interface AuthStore {
  user: User | null
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
```

#### React Query for Server State
```typescript
// features/marketplace/hooks/useListings.ts
import { useQuery } from '@tanstack/react-query'

export function useListings() {
  return useQuery({
    queryKey: ['listings'],
    queryFn: () => apiClient.get('/marketplace/listings'),
  })
}
```

### Web3 Integration

We use wagmi for blockchain interactions:

```typescript
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function ConnectWallet() {
  const { address } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  // Component logic
}
```

### Testing

#### Unit Tests (Vitest)
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

#### E2E Tests (Playwright)
```typescript
import { test, expect } from '@playwright/test'

test('user can connect wallet', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Connect Wallet')
  // Test wallet connection flow
})
```

## Building for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

The build output will be in the `dist/` directory.

## Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `VITE_API_URL` - Backend API URL
- `VITE_WS_URL` - WebSocket server URL
- `VITE_CHAIN_ID` - Blockchain network ID
- `VITE_WALLETCONNECT_PROJECT_ID` - WalletConnect project ID

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm test`
4. Format code: `npm run format`
5. Check types: `npm run type-check`
6. Submit a pull request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting by route
- Lazy loading of components
- Image optimization
- Bundle size monitoring

## Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance