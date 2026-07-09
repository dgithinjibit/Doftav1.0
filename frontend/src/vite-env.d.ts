/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
  readonly VITE_CHAIN_ID: string
  readonly VITE_ETHEREUM_RPC: string
  readonly VITE_POLYGON_RPC: string
  readonly VITE_WASTE_TOKEN_ADDRESS: string
  readonly VITE_CARBO_NFT_ADDRESS: string
  readonly VITE_DOFTA_TOKEN_ADDRESS: string
  readonly VITE_MARKETPLACE_ADDRESS: string
  readonly VITE_GOVERNANCE_ADDRESS: string
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  readonly VITE_GA_TRACKING_ID?: string
  readonly VITE_ENABLE_GOVERNANCE: string
  readonly VITE_ENABLE_CARBON_CREDITS: string
  readonly VITE_ENABLE_DEFI: string
  readonly VITE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

