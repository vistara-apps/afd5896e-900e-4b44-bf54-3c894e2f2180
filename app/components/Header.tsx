'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Search, Bell, Settings } from 'lucide-react';
import { useAccount } from 'wagmi';

export function Header() {
  const { isConnected, address } = useAccount();

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white text-xl font-bold">StableSwap Aggregator</div>
          <div className="flex items-center space-x-2 text-sm text-white/70">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Base Network</span>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tokens, pools..."
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            {isConnected ? (
              <Wallet>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <Avatar address={address} className="w-6 h-6" />
                  <Name address={address} className="text-white text-sm" />
                </div>
              </Wallet>
            ) : (
              <ConnectWallet className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
