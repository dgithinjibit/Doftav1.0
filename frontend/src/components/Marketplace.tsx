
import React, { useState } from 'react';
import { UserRole, MarketplaceListing } from '../types';
import Card from './shared/Card';
import Button from './shared/Button';
import { CheckCircleIcon } from './icons';

const mockListings: MarketplaceListing[] = [
    { id: '1', product: 'Organic Tomatoes', farmer: 'Green Valley Farms', quantity: 200, unit: 'kg', qualityScore: 95, sustainabilityBadges: ['Water-Wise', 'Low-Carbon'], pricePerUnit: 2.5, imageUrl: 'https://picsum.photos/seed/tomatoes/400/300' },
    { id: '2', product: 'Heirloom Carrots', farmer: 'Sunset Acres', quantity: 150, unit: 'kg', qualityScore: 92, sustainabilityBadges: ['Organic'], pricePerUnit: 1.8, imageUrl: 'https://picsum.photos/seed/carrots/400/300' },
    { id: '3', product: 'Sweet Corn', farmer: 'Farmer John', quantity: 500, unit: 'ears', qualityScore: 98, sustainabilityBadges: ['Organic', 'No-Till'], pricePerUnit: 0.5, imageUrl: 'https://picsum.photos/seed/corn/400/300' },
    { id: '4', product: 'Red Potatoes', farmer: 'Riverbend Farms', quantity: 300, unit: 'kg', qualityScore: 90, sustainabilityBadges: ['Low-Carbon'], pricePerUnit: 1.2, imageUrl: 'https://picsum.photos/seed/potatoes/400/300' },
];

interface MarketplaceProps {
    userRole: UserRole;
}

const FarmerView: React.FC = () => {
    const [step, setStep] = useState(0);

    return (
        <Card className="p-6">
            <h2 className="text-2xl font-bold text-stone-700 mb-1">List Your Harvest</h2>
            <p className="text-stone-500 mb-6">Sell directly to verified buyers and get paid instantly.</p>
            {step === 0 && (
                <form className="space-y-4" onSubmit={(e) => {e.preventDefault(); setStep(1);}}>
                    <div>
                        <label htmlFor="product" className="block text-sm font-medium text-stone-600">Product</label>
                        <input type="text" id="product" defaultValue="Heirloom Tomatoes" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
                    </div>
                     <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-stone-600">Quantity (kg)</label>
                        <input type="number" id="quantity" defaultValue="120" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
                    </div>
                     <div>
                        <label htmlFor="price" className="block text-sm font-medium text-stone-600">Price per kg ($)</label>
                        <input type="number" id="price" defaultValue="3.10" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
                    </div>
                    <Button type="submit" fullWidth>Review & List</Button>
                </form>
            )}
            {step === 1 && (
                <div className="text-center">
                    <CheckCircleIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-stone-800">Listing Submitted!</h3>
                    <p className="text-stone-600 mt-2">Your 120kg of Heirloom Tomatoes are now live on the marketplace. Buyers will be notified.</p>
                    <p className="text-sm text-stone-500 mt-4">A smart contract has been created to hold funds in escrow upon a sale, guaranteeing your payment.</p>
                    <Button onClick={() => setStep(0)} variant="secondary" className="mt-6">Create Another Listing</Button>
                </div>
            )}
        </Card>
    );
}

const BuyerView: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
                <input type="text" placeholder="Search for produce (e.g., 'Organic Tomatoes')" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockListings.map(listing => (
                    <Card key={listing.id} className="group flex flex-col">
                        <img src={listing.imageUrl} alt={listing.product} className="w-full h-48 object-cover" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-stone-800">{listing.product}</h3>
                            <p className="text-sm text-stone-500">from {listing.farmer}</p>
                             <div className="flex flex-wrap gap-2 my-3">
                                {listing.sustainabilityBadges.map(badge => (
                                    <span key={badge} className="text-xs bg-lime-100 text-lime-800 px-2 py-1 rounded-full font-medium">{badge}</span>
                                ))}
                            </div>
                            <div className="flex-grow"></div>
                            <div className="flex justify-between items-end mt-4">
                                <div>
                                    <p className="text-2xl font-bold text-emerald-600">${listing.pricePerUnit.toFixed(2)}<span className="text-sm font-normal text-stone-500">/{listing.unit}</span></p>
                                    <p className="text-sm text-stone-600">{listing.quantity} {listing.unit} available</p>
                                </div>
                                <Button variant="primary" className="py-2 px-4">Bid</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

const Marketplace: React.FC<MarketplaceProps> = ({ userRole }) => {
    return (
        <div className="py-6">
             <div>
                <h1 className="text-3xl font-bold text-stone-800">Marketplace</h1>
                <p className="text-stone-500 mb-6">{userRole === UserRole.Farmer ? "Sell your produce directly to trusted buyers." : "Source transparent, sustainably-grown produce."}</p>
            </div>
            {userRole === UserRole.Farmer ? <FarmerView /> : <BuyerView />}
        </div>
    );
};

export default Marketplace;
