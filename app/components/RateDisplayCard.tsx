'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface RateDisplayCardProps {
  fromToken: string;
  toToken: string;
  rate: string;
  change: string;
  protocol: string;
  liquidity: string;
}

export function RateDisplayCard({
  fromToken,
  toToken,
  rate,
  change,
  protocol,
  liquidity
}: RateDisplayCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {fromToken.charAt(0)}
          </div>
          <span className="text-white font-medium">→</span>
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {toToken.charAt(0)}
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-white/70 text-sm">
          {fromToken} → {toToken}
        </div>
        <div className="text-white text-2xl font-bold">{rate}</div>
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>via {protocol}</span>
          <span>{liquidity} liquidity</span>
        </div>
      </div>
    </div>
  );
}
