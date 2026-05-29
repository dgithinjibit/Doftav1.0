
import React from 'react';
import { UserRole } from '../../types';
import { SproutIcon } from '../icons';

interface HeaderProps {
    userRole: UserRole;
}

const Header: React.FC<HeaderProps> = ({ userRole }) => {
    const isMobileView = userRole === UserRole.Farmer;

    return (
        <header className={`${isMobileView ? 'bg-stone-100' : 'bg-white border-b border-stone-200'} sticky top-0 z-10`}>
            <div className={`flex items-center justify-between p-4 ${!isMobileView ? 'max-w-7xl mx-auto' : ''}`}>
                <div className="flex items-center space-x-2">
                    <SproutIcon className="w-8 h-8 text-emerald-600" />
                    <span className="text-2xl font-bold text-stone-800">DOFTA</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="hidden sm:inline text-sm font-medium text-stone-500 bg-stone-200 px-3 py-1 rounded-full">{userRole} view</span>
                    <img
                        src={`https://i.pravatar.cc/150?u=${userRole}`}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full border-2 border-emerald-200"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
