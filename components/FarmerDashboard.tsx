
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { Screen } from '../types';
import { WasteIcon, CarbonIcon, GovIcon, LeafIcon, BellIcon, ArrowRightIcon } from './icons';

interface FarmerDashboardProps {
  navigate: (screen: Screen) => void;
}

const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ navigate }) => {
  return (
    <div className="space-y-6 py-6">
      <div className="text-left">
        <h1 className="text-3xl font-bold text-stone-800">Hello, Farmer John</h1>
        <p className="text-stone-500">Here's your farm's performance today.</p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-lime-50 border border-lime-200">
          <LeafIcon className="w-8 h-8 text-lime-700 mb-2" />
          <p className="text-sm text-lime-800 font-medium">Crop Health</p>
          <p className="text-2xl font-bold text-lime-900">98%</p>
          <p className="text-xs text-lime-700">+2% this week</p>
        </Card>
        <Card className="p-4 bg-amber-50 border border-amber-200">
          <CarbonIcon className="w-8 h-8 text-amber-700 mb-2" />
          <p className="text-sm text-amber-800 font-medium">Carbon Impact</p>
          <p className="text-2xl font-bold text-amber-900">2.1 tCO₂e</p>
          <p className="text-xs text-amber-700">sequestered</p>
        </Card>
      </div>

      {/* Token Balances */}
      <Card onClick={() => navigate(Screen.Wallet)}>
        <div className="p-4">
          <h2 className="font-bold text-stone-700">Your Co-op Tokens</h2>
          <p className="text-sm text-stone-500 mb-4">Rewards for your sustainable practices.</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-full"><WasteIcon className="w-5 h-5 text-red-600" /></div>
                <div>
                  <p className="font-semibold text-stone-800">WASTE</p>
                  <p className="text-xs text-stone-500">From waste prevention</p>
                </div>
              </div>
              <p className="font-bold text-lg text-stone-800">1,250</p>
            </div>
             <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-sky-100 rounded-full"><CarbonIcon className="w-5 h-5 text-sky-600" /></div>
                <div>
                  <p className="font-semibold text-stone-800">CARBO</p>
                  <p className="text-xs text-stone-500">From carbon capture</p>
                </div>
              </div>
              <p className="font-bold text-lg text-stone-800">5 NFT</p>
            </div>
             <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-full"><GovIcon className="w-5 h-5 text-emerald-600" /></div>
                <div>
                  <p className="font-semibold text-stone-800">DOFTA</p>
                  <p className="text-xs text-stone-500">Co-op governance</p>
                </div>
              </div>
              <p className="font-bold text-lg text-stone-800">350</p>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Alerts */}
      <Card onClick={() => navigate(Screen.Monitoring)} className="bg-yellow-100 border border-yellow-300">
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <BellIcon className="w-6 h-6 text-yellow-700 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800">High Spoilage Risk Alert</h3>
              <p className="text-sm text-yellow-700">Sector 4 tomatoes show high moisture. Act now to prevent 50kg of loss and earn WASTE tokens.</p>
              <span className="flex items-center text-sm font-semibold text-yellow-900 mt-2">
                View Recommendation <ArrowRightIcon className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-bold text-stone-700 mb-3">What do you want to do?</h2>
        <div className="space-y-3">
          <Button onClick={() => navigate(Screen.Marketplace)} variant="primary" fullWidth>List Today's Harvest</Button>
          <Button onClick={() => navigate(Screen.Carbon)} variant="outline" fullWidth>Mint Carbon Credits</Button>
          <Button onClick={() => navigate(Screen.DeFi)} variant="secondary" fullWidth>Explore Micro-Loans</Button>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
