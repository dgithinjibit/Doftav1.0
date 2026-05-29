import { useState } from 'react'
import { Sprout, Wallet, ShoppingBag, Vote, Leaf, Menu, X } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-app">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 md:mx-8 md:mt-8">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Sprout className="w-8 h-8 icon-outline-purple" />
              </div>
              <span className="text-2xl font-bold text-glow">DOFTA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <a href="#" className="nav-link-active">Dashboard</a>
              <a href="#" className="nav-link">Marketplace</a>
              <a href="#" className="nav-link">Governance</a>
              <a href="#" className="nav-link">Carbon Credits</a>
            </nav>

            {/* Connect Wallet Button */}
            <button className="hidden md:flex btn-accent items-center space-x-2">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 icon-outline" />
              ) : (
                <Menu className="w-6 h-6 icon-outline" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 animate-slide-down">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="nav-link-active">Dashboard</a>
                <a href="#" className="nav-link">Marketplace</a>
                <a href="#" className="nav-link">Governance</a>
                <a href="#" className="nav-link">Carbon Credits</a>
                <button className="btn-accent mt-4 flex items-center justify-center space-x-2">
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Welcome to DOFTA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            The Digital Farmer's Co-operative - Empowering farmers and buyers through blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent text-lg px-8 py-4">
              Get Started
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up">
          <div className="card-gradient">
            <div className="flex items-center justify-between mb-4">
              <Leaf className="w-10 h-10 icon-outline-purple" />
              <span className="badge-purple">+12%</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">1,234</h3>
            <p className="text-white/80">Active Farmers</p>
          </div>

          <div className="card-gradient">
            <div className="flex items-center justify-between mb-4">
              <ShoppingBag className="w-10 h-10 icon-outline-pink" />
              <span className="badge-pink">+8%</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">5,678</h3>
            <p className="text-white/80">Marketplace Listings</p>
          </div>

          <div className="card-gradient">
            <div className="flex items-center justify-between mb-4">
              <Vote className="w-10 h-10 icon-outline-purple" />
              <span className="badge-purple">Active</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">42</h3>
            <p className="text-white/80">Governance Proposals</p>
          </div>

          <div className="card-gradient">
            <div className="flex items-center justify-between mb-4">
              <Sprout className="w-10 h-10 icon-outline-pink" />
              <span className="badge-pink">+25%</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">2.1M</h3>
            <p className="text-white/80">Carbon Credits (tCO₂e)</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* For Farmers */}
          <div className="glass-card p-8 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-500/30 rounded-lg">
                <Leaf className="w-8 h-8 icon-outline-purple" />
              </div>
              <h2 className="text-3xl font-bold text-glow-purple">For Farmers</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Direct Marketplace</h3>
                  <p className="text-white/80">List your produce with quality scores and sustainability badges</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instant Payments</h3>
                  <p className="text-white/80">Receive payments through secure blockchain escrow</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Carbon Monetization</h3>
                  <p className="text-white/80">Convert sustainable practices into tradeable carbon credits</p>
                </div>
              </li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="glass-card p-8 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-accent-500/30 rounded-lg">
                <ShoppingBag className="w-8 h-8 icon-outline-pink" />
              </div>
              <h2 className="text-3xl font-bold text-glow-pink">For Buyers</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Verified Quality</h3>
                  <p className="text-white/80">Purchase produce with transparent quality metrics</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sustainability Tracking</h3>
                  <p className="text-white/80">Support eco-friendly farming practices</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Direct Sourcing</h3>
                  <p className="text-white/80">Build relationships directly with farmers</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-glow">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and buyers building a better food system together
          </p>
          <button className="btn-accent text-lg px-12 py-4">
            Connect Your Wallet
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 md:mx-8 md:mb-8 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="w-6 h-6 icon-outline" />
                <span className="text-xl font-bold">DOFTA</span>
              </div>
              <p className="text-white/70 text-sm">
                Building a decentralized future for agriculture
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Governance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carbon Credits</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="divider my-8"></div>
          <div className="text-center text-white/60 text-sm">
            <p>© 2026 DOFTA. Built with ❤️ for farmers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

// Made with Bob
