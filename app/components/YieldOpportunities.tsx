'use client';

import { useState } from 'react';
import { TrendingUp, Shield, Zap, ExternalLink } from 'lucide-react';

const yieldOpportunities = [
  {
    id: 1,
    protocol: 'Curve Finance',
    poolName: 'USDC/DAI Pool',
    apy: 12.4,
    tvl: '$856,000',
    risk: 'Low',
    stablecoinType: 'USDC/DAI',
    description: 'Stable swap pool with low impermanent loss',
    rewards: ['CRV', 'CVX'],
  },
  {
    id: 2,
    protocol: 'Aave',
    poolName: 'USDT Lending',
    apy: 8.7,
    tvl: '$1,200,000',
    risk: 'Very Low',
    stablecoinType: 'USDT',
    description: 'Supply USDT to earn lending interest',
    rewards: ['AAVE'],
  },
  {
    id: 3,
    protocol: 'Yearn Finance',
    poolName: 'Stability Pool',
    apy: 15.2,
    tvl: '$445,000',
    risk: 'Medium',
    stablecoinType: 'Multiple',
    description: 'Automated yield farming strategy',
    rewards: ['YFI', 'CRV'],
  },
  {
    id: 4,
    protocol: 'Convex',
    poolName: 'Boosted 3Pool',
    apy: 18.5,
    tvl: '$2,100,000',
    risk: 'Medium',
    stablecoinType: 'USDC/USDT/DAI',
    description: 'Boosted Curve rewards through Convex',
    rewards: ['CVX', 'CRV'],
  },
  {
    id: 5,
    protocol: 'Compound',
    poolName: 'USDC Supply',
    apy: 6.3,
    tvl: '$890,000',
    risk: 'Low',
    stablecoinType: 'USDC',
    description: 'Traditional lending market',
    rewards: ['COMP'],
  },
  {
    id: 6,
    protocol: 'Liquity',
    poolName: 'Stability Pool',
    apy: 22.1,
    tvl: '$325,000',
    risk: 'High',
    stablecoinType: 'LUSD',
    description: 'Provide LUSD to absorb liquidations',
    rewards: ['LQTY', 'ETH'],
  },
];

const riskColors = {
  'Very Low': 'bg-green-500/20 text-green-400',
  'Low': 'bg-blue-500/20 text-blue-400',
  'Medium': 'bg-yellow-500/20 text-yellow-400',
  'High': 'bg-red-500/20 text-red-400',
};

export function YieldOpportunities() {
  const [sortBy, setSortBy] = useState<'apy' | 'tvl' | 'risk'>('apy');
  const [filterRisk, setFilterRisk] = useState<string>('all');

  const filteredOpportunities = yieldOpportunities
    .filter(opp => filterRisk === 'all' || opp.risk === filterRisk)
    .sort((a, b) => {
      if (sortBy === 'apy') return b.apy - a.apy;
      if (sortBy === 'tvl') return parseInt(b.tvl.replace(/[$,]/g, '')) - parseInt(a.tvl.replace(/[$,]/g, ''));
      return 0;
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Yield Opportunities</h1>
          <p className="text-white/60">Discover the best stablecoin yield farming opportunities on Base</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-white/70">
          <TrendingUp className="w-4 h-4" />
          <span>Live APY Data</span>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-white/70 text-sm mb-2 block">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'apy' | 'tvl' | 'risk')}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
              >
                <option value="apy">Highest APY</option>
                <option value="tvl">Total Value Locked</option>
                <option value="risk">Risk Level</option>
              </select>
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block">Risk Level</label>
              <select
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
              >
                <option value="all">All Risk Levels</option>
                <option value="Very Low">Very Low</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white/70 text-sm">Total Opportunities</div>
            <div className="text-white text-2xl font-bold">{filteredOpportunities.length}</div>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors animate-slide-up"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {opportunity.protocol.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{opportunity.protocol}</h3>
                  <p className="text-white/60 text-sm">{opportunity.poolName}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${riskColors[opportunity.risk]}`}>
                {opportunity.risk}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">APY</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-bold text-lg">{opportunity.apy}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/70">TVL</span>
                <span className="text-white font-semibold">{opportunity.tvl}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/70">Assets</span>
                <span className="text-white font-medium">{opportunity.stablecoinType}</span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/60 text-sm mb-3">{opportunity.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm">Rewards</span>
                  <div className="flex items-center space-x-1">
                    {opportunity.rewards.map((reward, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full"
                      >
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Deposit</span>
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Disclaimer */}
      <div className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-yellow-400 font-semibold mb-2">Risk Disclaimer</h3>
            <p className="text-white/70 text-sm">
              DeFi protocols carry inherent risks including smart contract bugs, impermanent loss, and market volatility. 
              Please do your own research and only invest what you can afford to lose. APY rates are subject to change 
              and past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
