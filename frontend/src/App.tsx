import React, { useState, useCallback } from 'react';
import { UserRole, Screen } from './types';
import Landing from './components/Landing';
import WalletConnecting from './components/WalletConnecting';
import Onboarding from './components/Onboarding';
import FarmerDashboard from './components/FarmerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import Monitoring from './components/Monitoring';
import Wallet from './components/Wallet';
import Marketplace from './components/Marketplace';
import CarbonMinting from './components/CarbonMinting';
import DeFiPortal from './components/DeFiPortal';
import Governance from './components/Governance';
import BottomNav from './components/shared/BottomNav';
import Header from './components/shared/Header';

type AppState = 'landing' | 'connecting' | 'onboarding' | 'dashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Dashboard);

  const handleConnectWallet = useCallback(() => {
    setAppState('connecting');
  }, []);

  const handleWalletConnected = useCallback(() => {
    setAppState('onboarding');
  }, []);

  const handleOnboardingComplete = useCallback((role: UserRole) => {
    setUserRole(role);
    setAppState('dashboard');
  }, []);

  // Show landing page
  if (appState === 'landing') {
    return <Landing onConnect={handleConnectWallet} />;
  }

  // Show wallet connecting animation
  if (appState === 'connecting') {
    return <WalletConnecting onComplete={handleWalletConnected} />;
  }

  // Show onboarding (role selection)
  if (appState === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Show dashboard
  const renderContent = () => {
    switch (currentScreen) {
      case Screen.Dashboard:
        return userRole === UserRole.Farmer ? <FarmerDashboard navigate={setCurrentScreen} /> : <BuyerDashboard navigate={setCurrentScreen} />;
      case Screen.Monitoring:
        return <Monitoring />;
      case Screen.Wallet:
        return <Wallet />;
      case Screen.Marketplace:
        return <Marketplace userRole={userRole!} />;
      case Screen.Carbon:
        return <CarbonMinting navigate={setCurrentScreen} />;
      case Screen.DeFi:
        return <DeFiPortal />;
      case Screen.Governance:
        return <Governance />;
      default:
        return userRole === UserRole.Farmer ? <FarmerDashboard navigate={setCurrentScreen} /> : <BuyerDashboard navigate={setCurrentScreen} />;
    }
  };
  
  const isMobileView = userRole === UserRole.Farmer;

  return (
    <div className="flex flex-col h-screen font-sans antialiased bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
       <div className={`${isMobileView ? 'w-full max-w-lg mx-auto' : ''} flex flex-col h-full`}>
        <Header userRole={userRole} />
        <main className="flex-grow overflow-y-auto pb-24 px-4 md:px-6 lg:px-8">
          {renderContent()}
        </main>
        {isMobileView && <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />}
       </div>
    </div>
  );
};

export default App;

// Made with Bob
