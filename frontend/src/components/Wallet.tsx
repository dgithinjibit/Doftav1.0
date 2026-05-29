
import React from 'react';
import Card from './shared/Card';
import { WalletTransaction } from '../types';
import { WasteIcon, CarbonIcon, GovIcon } from './icons';

const mockTransactions: WalletTransaction[] = [
    { id: '1', type: 'earn', token: 'WASTE', amount: 25, description: 'Prevented spoilage in Sector 4', date: '2024-07-21' },
    { id: '2', type: 'mint', token: 'CARBO', amount: 1, description: 'Verified carbon capture for Q2', date: '2024-07-20' },
    { id: '3', type: 'earn', token: 'DOFTA', amount: 10, description: 'Voted on proposal #12', date: '2024-07-18' },
    { id: '4', type: 'earn', token: 'WASTE', amount: 50, description: 'Optimized irrigation schedule', date: '2024-07-15' },
];

const TokenIcon: React.FC<{token: 'WASTE' | 'CARBO' | 'DOFTA'}> = ({token}) => {
    switch(token) {
        case 'WASTE': return <div className="p-2 bg-red-100 rounded-full"><WasteIcon className="w-5 h-5 text-red-600" /></div>;
        case 'CARBO': return <div className="p-2 bg-sky-100 rounded-full"><CarbonIcon className="w-5 h-5 text-sky-600" /></div>;
        case 'DOFTA': return <div className="p-2 bg-emerald-100 rounded-full"><GovIcon className="w-5 h-5 text-emerald-600" /></div>;
    }
}

const Wallet: React.FC = () => {
    return (
        <div className="space-y-6 py-6">
            <div>
                <h1 className="text-3xl font-bold text-stone-800">Co-op Wallet</h1>
                <p className="text-stone-500">Your rewards for building a better food system.</p>
            </div>

            <Card className="bg-gradient-to-br from-emerald-600 to-lime-600 text-white p-6">
                <p className="text-lg font-medium opacity-80">Total Value</p>
                <p className="text-4xl font-bold mt-1">KES 398,370</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="font-bold text-xl">1,250</p>
                        <p className="text-sm opacity-80">WASTE</p>
                    </div>
                     <div>
                        <p className="font-bold text-xl">5</p>
                        <p className="text-sm opacity-80">CARBO NFT</p>
                    </div>
                     <div>
                        <p className="font-bold text-xl">350</p>
                        <p className="text-sm opacity-80">DOFTA</p>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="p-4">
                    <h2 className="text-xl font-bold text-stone-700">CARBO NFTs</h2>
                    <p className="text-stone-500 text-sm mb-4">Your verified carbon capture certificates.</p>
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(5)].map((_, i) => (
                           <div key={i} className="border border-stone-200 rounded-lg p-3 text-center bg-sky-50">
                               <CarbonIcon className="w-10 h-10 text-sky-600 mx-auto" />
                               <p className="font-semibold text-sm mt-2 text-sky-800">Carbon Credit #{1034+i}</p>
                               <p className="text-xs text-sky-600">0.21 tCO₂e</p>
                           </div>
                        ))}
                    </div>
                </div>
            </Card>

            <div>
                <h2 className="text-xl font-bold text-stone-700 mb-3">Recent Activity</h2>
                <div className="space-y-3">
                    {mockTransactions.map(tx => (
                        <Card key={tx.id}>
                            <div className="p-3 flex items-center space-x-4">
                               <TokenIcon token={tx.token} />
                               <div className="flex-grow">
                                    <p className="font-semibold text-stone-800">{tx.description}</p>
                                    <p className="text-sm text-stone-500">{new Date(tx.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                               </div>
                               <div className="text-right">
                                    <p className={`font-bold text-lg ${tx.type === 'earn' || tx.type === 'mint' ? 'text-green-600' : 'text-red-600'}`}>
                                        {tx.type === 'earn' || tx.type === 'mint' ? '+' : '-'}{tx.amount} {tx.token}
                                    </p>
                               </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wallet;
