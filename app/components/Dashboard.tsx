'use client';

import { RateDisplayCard } from './RateDisplayCard';
import { LiquidityChart } from './LiquidityChart';
import { WalletOverview } from './WalletOverview';
import { RecentActivity } from './RecentActivity';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-white/70">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live Data</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart */}
        <div className="col-span-8">
          <LiquidityChart />
        </div>

        {/* Wallet Overview */}
        <div className="col-span-4">
          <WalletOverview />
        </div>

        {/* Rate Display Cards */}
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-4">
            <RateDisplayCard
              fromToken="USDC"
              toToken="DAI"
              rate="1.0012"
              change="+0.12%"
              protocol="Uniswap V3"
              liquidity="$2.4M"
            />
            <RateDisplayCard
              fromToken="USDT"
              toToken="USDC"
              rate="0.9998"
              change="-0.02%"
              protocol="Curve"
              liquidity="$1.8M"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-span-4">
          <RecentActivity />
        </div>

        {/* Yield Opportunities Preview */}
        <div className="col-span-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Yield Farming Opportunities</h2>
              <button className="text-accent hover:text-accent/80 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">USDC/DAI Pool</span>
                  <span className="text-green-400 text-sm font-medium">+12.4% APY</span>
                </div>
                <div className="text-white text-lg font-semibold">$856K TVL</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">USDT Lending</span>
                  <span className="text-green-400 text-sm font-medium">+8.7% APY</span>
                </div>
                <div className="text-white text-lg font-semibold">$1.2M TVL</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">Stability Pool</span>
                  <span className="text-green-400 text-sm font-medium">+15.2% APY</span>
                </div>
                <div className="text-white text-lg font-semibold">$445K TVL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
