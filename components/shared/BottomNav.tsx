
import React from 'react';
import { Screen } from '../../types';
import { DashboardIcon, WalletIcon, MarketplaceIcon, GovIcon } from '../icons';

interface BottomNavProps {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
}

const navItems = [
  { screen: Screen.Dashboard, label: 'Dashboard', icon: DashboardIcon },
  { screen: Screen.Wallet, label: 'Wallet', icon: WalletIcon },
  { screen: Screen.Marketplace, label: 'Market', icon: MarketplaceIcon },
  { screen: Screen.Governance, label: 'Gov', icon: GovIcon },
];

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setCurrentScreen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t border-stone-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = currentScreen === item.screen;
          const Icon = item.icon;
          return (
            <button
              key={item.screen}
              onClick={() => setCurrentScreen(item.screen)}
              className={`flex flex-col items-center justify-center space-y-1 w-full transition-colors duration-200 ${
                isActive ? 'text-emerald-600' : 'text-stone-500 hover:text-emerald-500'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
