import React from 'react';
import Button from './shared/Button';
import { SproutIcon } from './icons';

interface LandingProps {
  onConnect: () => void;
}

const Landing: React.FC<LandingProps> = ({ onConnect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <SproutIcon className="w-24 h-24 text-white mx-auto mb-6 icon-glow-purple animate-pulse" />
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to DOFTA
          </h1>
          <p className="text-2xl text-white/90 mb-2">
            The Digital Farmer's Co-operative
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Empowering farmers with blockchain technology, carbon credits, and transparent marketplace access
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl">
            <p className="text-4xl font-bold text-white mb-2">1,250+</p>
            <p className="text-white/80">Active Farmers</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <p className="text-4xl font-bold text-white mb-2">KES 350M</p>
            <p className="text-white/80">Trade Volume</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <p className="text-4xl font-bold text-white mb-2">50K+</p>
            <p className="text-white/80">Carbon Credits</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 mb-6">
            Connect your wallet to access the co-operative platform
          </p>
          <Button 
            onClick={onConnect} 
            variant="primary" 
            fullWidth
            className="text-lg py-4"
          >
            🔗 Connect Wallet
          </Button>
          <p className="text-white/60 text-sm mt-4">
            Don't have a wallet? We'll create one for you!
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">🌾 For Farmers</h3>
            <p className="text-white/80 text-sm">
              Earn tokens for sustainable practices, mint carbon credits, and access new markets
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">🏪 For Buyers</h3>
            <p className="text-white/80 text-sm">
              Source verified produce with full traceability and sustainability metrics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

// Made with Bob
