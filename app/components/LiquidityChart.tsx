'use client';

import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export function LiquidityChart() {
  const [timeframe, setTimeframe] = useState('24h');

  // Mock data points for the chart
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    time: i,
    value: Math.random() * 100 + 50 + Math.sin(i * 0.5) * 20,
  }));

  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-1">Liquidity Overview</h2>
          <p className="text-white/60 text-sm">Total Value Locked across protocols</p>
        </div>
        <div className="flex items-center space-x-2">
          {['1h', '24h', '7d', '30d'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                timeframe === period
                  ? 'bg-accent text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-white text-4xl font-bold mb-2">$4.2M</div>
        <div className="flex items-center space-x-2 text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+12.5% from yesterday</span>
        </div>
      </div>

      {/* Simple SVG Chart */}
      <div className="h-48 w-full">
        <svg className="w-full h-full" viewBox="0 0 400 150">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </linearGradient>
          </defs>
          
          {/* Chart line */}
          <path
            d={chartData
              .map((point, index) => {
                const x = (index / (chartData.length - 1)) * 400;
                const y = 150 - ((point.value - minValue) / (maxValue - minValue)) * 150;
                return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
              })
              .join(' ')}
            fill="none"
            stroke="rgb(34, 197, 94)"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          
          {/* Fill area under curve */}
          <path
            d={[
              chartData
                .map((point, index) => {
                  const x = (index / (chartData.length - 1)) * 400;
                  const y = 150 - ((point.value - minValue) / (maxValue - minValue)) * 150;
                  return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                })
                .join(' '),
              'L 400 150 L 0 150 Z'
            ].join(' ')}
            fill="url(#chartGradient)"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between text-sm text-white/60 mt-4">
        <span>00:00</span>
        <span>12:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}
