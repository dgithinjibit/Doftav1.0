import React, { useEffect } from 'react';
import { CheckCircleIcon } from './icons';

interface WalletConnectingProps {
  onComplete: () => void;
}

const WalletConnecting: React.FC<WalletConnectingProps> = ({ onComplete }) => {
  useEffect(() => {
    // Simulate wallet connection process
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full glass-card p-8 rounded-2xl text-center">
        <div className="mb-6">
          {/* Animated wallet icon */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            <div className="relative bg-white/30 rounded-full w-24 h-24 flex items-center justify-center">
              <span className="text-5xl">👛</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Connecting Wallet...
        </h2>
        <p className="text-white/80 mb-6">
          Please wait while we securely connect your wallet to the DOFTA platform
        </p>

        {/* Progress steps */}
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3 animate-pulse">
            <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <span className="text-white/90">Verifying wallet signature...</span>
          </div>
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-6 h-6 rounded-full bg-white/20"></div>
            <span className="text-white/70">Creating secure session...</span>
          </div>
          <div className="flex items-center space-x-3 opacity-30">
            <div className="w-6 h-6 rounded-full bg-white/20"></div>
            <span className="text-white/70">Loading your profile...</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-white/60 text-sm">
            🔒 Your connection is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletConnecting;

// Made with Bob
