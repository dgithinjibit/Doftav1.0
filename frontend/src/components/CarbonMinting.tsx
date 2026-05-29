
import React, { useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { Screen } from '../types';
import { CarbonIcon, CheckCircleIcon } from './icons';

interface CarbonMintingProps {
    navigate: (screen: Screen) => void;
}

const steps = [
    "Analyzing Satellite Imagery...",
    "Verifying Soil Health Data...",
    "Calculating Carbon Sequestration...",
    "Minting CARBO NFT on the blockchain..."
];

const CarbonMinting: React.FC<CarbonMintingProps> = ({ navigate }) => {
    const [currentStep, setCurrentStep] = useState(-1);

    const startMinting = () => {
        setCurrentStep(0);
    };

    useEffect(() => {
        if (currentStep >= 0 && currentStep < steps.length) {
            const timer = setTimeout(() => {
                setCurrentStep(currentStep + 1);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    return (
        <div className="py-6 flex flex-col items-center justify-center text-center">
            <Card className="w-full max-w-md p-8">
                <CarbonIcon className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-stone-800">Mint Carbon Credits</h1>
                <p className="text-stone-500 mt-2">Turn your sustainable farming practices into a valuable, verifiable asset.</p>

                {currentStep === -1 && (
                    <div className="mt-8">
                        <p className="text-stone-600 mb-6">Our AI will analyze satellite and sensor data to verify the amount of carbon your farm has captured. This creates a CARBO NFT you can hold or sell on ESG markets.</p>
                        <Button onClick={startMinting} fullWidth>Start Verification & Minting</Button>
                    </div>
                )}

                {currentStep >= 0 && currentStep < steps.length && (
                    <div className="mt-8">
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-center text-left">
                                    <div className="w-8 h-8 mr-4 flex-shrink-0">
                                        {currentStep > index ? (
                                            <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
                                        ) : currentStep === index ? (
                                            <div className="w-8 h-8 border-4 border-dashed border-sky-300 rounded-full animate-spin"></div>
                                        ) : (
                                            <div className="w-8 h-8 bg-stone-200 rounded-full"></div>
                                        )}
                                    </div>
                                    <p className={`font-medium transition-colors duration-300 ${currentStep >= index ? 'text-stone-700' : 'text-stone-400'}`}>
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {currentStep === steps.length && (
                    <div className="mt-8 text-center">
                        <CheckCircleIcon className="w-20 h-20 text-emerald-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-stone-800">Success!</h2>
                        <p className="text-stone-600 mt-2">You have successfully minted <span className="font-bold">1 CARBO NFT</span> representing <span className="font-bold">0.85 tCO₂e</span> of captured carbon.</p>
                        <Button onClick={() => navigate(Screen.Wallet)} className="mt-8" fullWidth>View in Wallet</Button>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default CarbonMinting;
