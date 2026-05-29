
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { CheckCircleIcon } from './icons';

const CreditScoreGauge: React.FC<{ score: number }> = ({ score }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (score / 1000) * circumference;

    return (
        <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                    className="text-stone-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                />
                <circle
                    className="text-emerald-500"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1.5s ease-out' }}
                />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-stone-800">{score}</span>
                <span className="text-sm text-stone-500">Co-op Score</span>
            </div>
        </div>
    );
};

const DeFiPortal: React.FC = () => {
    return (
        <div className="space-y-6 py-6">
            <div>
                <h1 className="text-3xl font-bold text-stone-800">DeFi Access Portal</h1>
                <p className="text-stone-500">Unlock financial services powered by your on-chain reputation.</p>
            </div>

            <Card className="p-6 text-center">
                <h2 className="text-xl font-bold text-stone-700">Your Co-op Credit Score</h2>
                <p className="text-stone-500 text-sm mb-6">Based on your trade history, token earnings, and governance participation.</p>
                <CreditScoreGauge score={780} />
            </Card>

            <Card className="bg-lime-50 border border-lime-200 p-6">
                 <h2 className="text-xl font-bold text-lime-800">Micro-Loan Eligibility</h2>
                 <p className="text-lime-700 mt-1">You are pre-approved for a low-interest loan to invest in your farm.</p>
                 <div className="mt-6 bg-white p-6 rounded-lg shadow-sm text-center">
                    <p className="text-sm text-stone-500">Loan Amount</p>
                    <p className="text-4xl font-bold text-stone-800">$5,000</p>
                    <p className="text-sm text-stone-500 mt-2">at <span className="font-bold text-emerald-600">3.5% APR</span></p>
                    <Button className="mt-6" fullWidth>Apply in 2 Minutes</Button>
                 </div>
            </Card>

            <Card className="p-6">
                <h3 className="text-xl font-bold text-stone-700 mb-3">How it Works</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-stone-600"><strong>Build Reputation:</strong> Every successful trade and token earned on DOFTA improves your score.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-stone-600"><strong>Access Capital:</strong> Your on-chain history replaces traditional credit checks, unlocking fair financing.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-stone-600"><strong>Grow Your Farm:</strong> Use loans for equipment, seeds, or infrastructure to increase your yield and sustainability.</span>
                    </li>
                </ul>
            </Card>
        </div>
    );
};

export default DeFiPortal;
