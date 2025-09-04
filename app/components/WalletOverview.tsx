'use client';

import { Wallet, TrendingUp, DollarSign } from 'lucide-react';
import { useAccount } from 'wagmi';

export function WalletOverview() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center py-8">
          <Wallet className="w-12 h-12 text-white/40 mx-auto mb-4" />
          <h3 className="text-white text-lg font-semibold mb-2">Connect Wallet</h3>
          <p className="text-white/60 text-sm mb-4">Connect your wallet to view your portfolio</p>
          <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Connect Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Portfolio Value */}
      <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold">Portfolio Value</h3>
          <DollarSign className="w-5 h-5 text-white/60" />
        </div>
        <div className="space-y-2">
          <div className="text-white text-3xl font-bold">$1,715</div>
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+16.37% ($240)</span>
          </div>
        </div>
      </div>

      {/* Token Holdings */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-lg font-semibold mb-4">Holdings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                U
              </div>
              <div>
                <div className="text-white font-medium">USDC</div>
                <div className="text-white/60 text-sm">865.42</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium">$865</div>
              <div className="text-green-400 text-sm">+2.1%</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                D
              </div>
              <div>
                <div className="text-white font-medium">DAI</div>
                <div className="text-white/60 text-sm">432.18</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium">$432</div>
              <div className="text-green-400 text-sm">+1.8%</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                T
              </div>
              <div>
                <div className="text-white font-medium">USDT</div>
                <div className="text-white/60 text-sm">418.02</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium">$418</div>
              <div className="text-red-400 text-sm">-0.3%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-lg font-semibold mb-4">24H Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-white/60 text-sm mb-1">Volume</div>
            <div className="text-white font-semibold">$2.4K</div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">Trades</div>
            <div className="text-white font-semibold">12</div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">Best Rate</div>
            <div className="text-white font-semibold">1.0015</div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">Saved</div>
            <div className="text-green-400 font-semibold">$8.42</div>
          </div>
        </div>
      </div>
    </div>
  );
}
