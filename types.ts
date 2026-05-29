
export enum UserRole {
  Farmer = 'FARMER',
  Buyer = 'BUYER',
}

export enum Screen {
  Dashboard = 'DASHBOARD',
  Monitoring = 'MONITORING',
  Wallet = 'WALLET',
  Marketplace = 'MARKETPLACE',
  Carbon = 'CARBON',
  DeFi = 'DEFI',
  Governance = 'GOVERNANCE',
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  recommendation: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
}

export interface WalletTransaction {
    id: string;
    type: 'earn' | 'spend' | 'mint';
    token: 'WASTE' | 'CARBO' | 'DOFTA';
    amount: number;
    description: string;
    date: string;
}

export interface MarketplaceListing {
    id: string;
    product: string;
    farmer: string;
    quantity: number;
    unit: string;
    qualityScore: number;
    sustainabilityBadges: string[];
    pricePerUnit: number;
    imageUrl: string;
}

export interface GovernanceProposal {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'passed' | 'failed';
    votesFor: number;
    votesAgainst: number;
    endDate: string;
}
