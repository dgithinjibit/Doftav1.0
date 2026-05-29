
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { GovernanceProposal } from '../types';
import { GovIcon } from './icons';

const mockProposals: GovernanceProposal[] = [
    { id: '1', title: 'Reduce Marketplace Fee from 2% to 1.5%', description: 'A proposal to lower the platform fee to increase farmer take-home revenue.', status: 'active', votesFor: 12500, votesAgainst: 3200, endDate: '3 days' },
    { id: '2', title: 'Fund a new cold storage facility', description: 'Allocate 500,000 WASTE tokens from the treasury to co-fund a regional cold storage unit.', status: 'passed', votesFor: 25000, votesAgainst: 1800, endDate: '1 month ago' },
    { id: '3', title: 'Integrate with a new logistics partner', description: 'Onboard "Farm-to-Table Logistics" to provide cheaper shipping options for farmers.', status: 'failed', votesFor: 8000, votesAgainst: 9500, endDate: '2 months ago' },
];

const statusColors = {
    active: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500' },
    passed: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500' },
    failed: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500' },
};


const Governance: React.FC = () => {
    return (
        <div className="space-y-6 py-6">
            <div>
                <h1 className="text-3xl font-bold text-stone-800">Governance</h1>
                <p className="text-stone-500">Have your say in the future of the DOFTA co-operative.</p>
            </div>

            <Card className="p-6 flex flex-col md:flex-row items-center justify-between bg-emerald-50 border border-emerald-200">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-lg font-medium text-emerald-700">Your Voting Power</p>
                    <p className="text-4xl font-bold text-emerald-800">350 DOFTA</p>
                    <p className="text-sm text-emerald-600">Earn more by participating and trading.</p>
                </div>
                <Button>Create a New Proposal</Button>
            </Card>

            <div>
                <h2 className="text-xl font-bold text-stone-700 mb-3">Active Proposals</h2>
                {mockProposals.filter(p => p.status === 'active').map(proposal => (
                    <Card key={proposal.id} className="mb-4">
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold text-stone-800 mb-1 pr-4">{proposal.title}</h3>
                                <span className={`${statusColors.active.bg} ${statusColors.active.text} text-xs font-bold px-2 py-1 rounded-full uppercase`}>Active</span>
                            </div>
                            <p className="text-stone-600 text-sm mb-4">{proposal.description}</p>
                            
                            <div className="w-full bg-stone-200 rounded-full h-4 mb-2">
                                <div className="bg-emerald-500 h-4 rounded-full" style={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}></div>
                            </div>
                             <div className="flex justify-between text-sm">
                                <p><span className="font-bold text-emerald-600">{proposal.votesFor.toLocaleString()}</span> For</p>
                                <p><span className="font-bold text-red-600">{proposal.votesAgainst.toLocaleString()}</span> Against</p>
                            </div>

                            <p className="text-xs text-stone-500 mt-3 text-center">Voting ends in {proposal.endDate}</p>

                            <div className="flex gap-4 mt-4">
                                <Button variant="primary" fullWidth>Vote For</Button>
                                <Button variant="secondary" fullWidth>Vote Against</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div>
                <h2 className="text-xl font-bold text-stone-700 mb-3">Voting History</h2>
                 <div className="space-y-3">
                    {mockProposals.filter(p => p.status !== 'active').map(proposal => (
                        <Card key={proposal.id} className={`border-l-4 ${statusColors[proposal.status].border}`}>
                           <div className="p-4">
                               <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-stone-800 pr-4">{proposal.title}</h3>
                                     <span className={`${statusColors[proposal.status].bg} ${statusColors[proposal.status].text} text-xs font-bold px-2 py-1 rounded-full uppercase`}>{proposal.status}</span>
                               </div>
                               <p className="text-sm text-stone-500 mt-1">{proposal.endDate}</p>
                           </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Governance;
