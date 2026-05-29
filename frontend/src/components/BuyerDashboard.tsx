
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { Screen } from '../types';
import { MarketplaceIcon, CheckCircleIcon, ArrowRightIcon } from './icons';
import { MarketplaceListing } from '../types';

interface BuyerDashboardProps {
  navigate: (screen: Screen) => void;
}

const mockListings: MarketplaceListing[] = [
    { id: '1', product: 'Organic Tomatoes', farmer: 'Green Valley Farms', quantity: 200, unit: 'kg', qualityScore: 95, sustainabilityBadges: ['Water-Wise', 'Low-Carbon'], pricePerUnit: 350, imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop' },
    { id: '2', product: 'Heirloom Carrots', farmer: 'Sunset Acres', quantity: 150, unit: 'kg', qualityScore: 92, sustainabilityBadges: ['Organic'], pricePerUnit: 250, imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop' },
];


const BuyerDashboard: React.FC<BuyerDashboardProps> = ({ navigate }) => {
  return (
    <div className="space-y-8 py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-stone-800">Welcome, Fresh Foods Inc.</h1>
          <p className="text-stone-500 mt-1">Source verified, sustainable produce directly from the farm.</p>
        </div>
        <Button onClick={() => navigate(Screen.Marketplace)} variant="primary" className="text-lg">
          <MarketplaceIcon className="w-5 h-5 mr-2 inline" />
          Browse Marketplace
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-stone-700">Featured Listings</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockListings.map(listing => (
                    <Card key={listing.id} className="group" onClick={() => navigate(Screen.Marketplace)}>
                        <img src={listing.imageUrl} alt={listing.product} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-stone-800">{listing.product}</h3>
                            <p className="text-sm text-stone-500">from {listing.farmer}</p>
                            <div className="flex justify-between items-end mt-4">
                                <div>
                                    <p className="text-2xl font-bold text-emerald-600">KES {listing.pricePerUnit.toFixed(0)}<span className="text-sm font-normal text-stone-500">/{listing.unit}</span></p>
                                    <p className="text-sm text-stone-600">{listing.quantity} {listing.unit} available</p>
                                </div>
                                <div className="text-right">
                                     {listing.sustainabilityBadges.map(badge => (
                                        <span key={badge} className="text-xs bg-lime-100 text-lime-800 px-2 py-1 rounded-full ml-1">{badge}</span>
                                     ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
             </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
            <Card className="p-6 bg-emerald-50 border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Why Source from DOFTA?</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-emerald-700"><strong>Full Traceability:</strong> Know the journey of your produce from seed to shelf.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-emerald-700"><strong>Verified Sustainability:</strong> Meet your ESG goals with produce backed by real data.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-emerald-700"><strong>Co-operative Model:</strong> Your purchase directly supports and empowers farmers.</span>
                    </li>
                </ul>
            </Card>

            <Card className="p-6">
                <h3 className="text-xl font-bold text-stone-700 mb-3">Your Recent Activity</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-stone-800">Bid on Organic Potatoes</p>
                            <p className="text-sm text-stone-500">Status: <span className="text-yellow-600">Pending</span></p>
                        </div>
                        <ArrowRightIcon className="w-5 h-5 text-stone-400" />
                    </div>
                     <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-stone-800">Contract for Apples</p>
                            <p className="text-sm text-stone-500">Status: <span className="text-green-600">Completed</span></p>
                        </div>
                        <ArrowRightIcon className="w-5 h-5 text-stone-400" />
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
