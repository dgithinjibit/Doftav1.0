
import React, { useState } from 'react';
import { UserRole } from '../types';
import Button from './shared/Button';
import { SproutIcon, CheckCircleIcon, ArrowRightIcon } from './icons';

interface OnboardingProps {
  onComplete: (role: UserRole) => void;
}

const ProgressIndicator: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    const steps = ["Select Role", "Create ID", "Ready!"];
    return (
        <div className="flex items-center justify-center space-x-2 my-8">
            {steps.map((step, index) => (
                <React.Fragment key={step}>
                    <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-500 ${currentStep > index ? 'bg-emerald-600' : 'bg-stone-300'}`}>
                            {currentStep > index + 1 ? <CheckCircleIcon className="w-5 h-5"/> : index + 1}
                        </div>
                        <span className={`ml-2 text-sm font-medium transition-colors duration-500 ${currentStep > index ? 'text-stone-800' : 'text-stone-400'}`}>{step}</span>
                    </div>
                    {index < steps.length - 1 && <div className={`flex-1 h-1 transition-colors duration-500 ${currentStep > index + 1 ? 'bg-emerald-600' : 'bg-stone-300'}`} />}
                </React.Fragment>
            ))}
        </div>
    );
};


const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setStep(1);
    // Simulate wallet/ID creation
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => setStep(3), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <SproutIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-stone-800">Welcome to DOFTA</h1>
          <p className="text-stone-500 mt-2">The Farmer's Digital Co-operative for the Web4 Era.</p>
        </div>

        {step < 3 && <ProgressIndicator currentStep={step + 1} />}

        {step === 0 && (
          <div className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-center text-stone-700">What is your role?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div onClick={() => handleRoleSelect(UserRole.Farmer)} className="p-6 border-2 border-stone-200 rounded-lg text-center cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                <h3 className="text-lg font-bold text-stone-800">Farmer</h3>
                <p className="text-sm text-stone-500 mt-1">Earn tokens, prevent waste, and access new markets.</p>
              </div>
              <div onClick={() => handleRoleSelect(UserRole.Buyer)} className="p-6 border-2 border-stone-200 rounded-lg text-center cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                <h3 className="text-lg font-bold text-stone-800">Buyer</h3>
                <p className="text-sm text-stone-500 mt-1">Source verified produce transparently and efficiently.</p>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
            <div className="mt-10 text-center animate-pulse">
                <h2 className="text-xl font-semibold text-stone-700">Creating your secure Digital ID...</h2>
                <p className="text-stone-500 mt-2">This is your key to the co-operative, ensuring transparent and verified trades.</p>
                <div className="w-16 h-16 border-4 border-dashed border-emerald-300 rounded-full mx-auto mt-6 animate-spin"></div>
            </div>
        )}
        
        {step === 2 && (
            <div className="mt-10 text-center animate-pulse">
                <h2 className="text-xl font-semibold text-stone-700">Generating your Co-op Wallet...</h2>
                <p className="text-stone-500 mt-2">Where you'll receive tokens for your contributions to a healthier food system.</p>
                <div className="w-16 h-16 border-4 border-dashed border-stone-300 rounded-full mx-auto mt-6 animate-spin"></div>
            </div>
        )}

        {step === 3 && (
            <div className="mt-10 text-center">
                <CheckCircleIcon className="w-20 h-20 text-emerald-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-stone-800">You're all set!</h2>
                <p className="text-stone-600 mt-2">Welcome to the future of farming. Let's grow together.</p>
                <Button onClick={() => onComplete(selectedRole!)} className="mt-8 group" fullWidth>
                    Enter DOFTA Dashboard <ArrowRightIcon className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        )}

      </div>
    </div>
  );
};

export default Onboarding;
