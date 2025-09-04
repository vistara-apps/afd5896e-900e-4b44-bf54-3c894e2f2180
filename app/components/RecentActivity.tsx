'use client';

import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'swap',
    fromToken: 'USDC',
    toToken: 'DAI',
    amount: '500',
    rate: '1.0012',
    timestamp: '2 minutes ago',
    status: 'completed',
  },
  {
    id: 2,
    type: 'swap',
    fromToken: 'USDT',
    toToken: 'USDC',
    amount: '250',
    rate: '0.9998',
    timestamp: '15 minutes ago',
    status: 'completed',
  },
  {
    id: 3,
    type: 'swap',
    fromToken: 'DAI',
    toToken: 'USDT',
    amount: '100',
    rate: '0.9985',
    timestamp: '1 hour ago',
    status: 'pending',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-semibold">Recent Activity</h3>
        <button className="text-accent hover:text-accent/80 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className={`p-2 rounded-lg ${
              activity.type === 'swap' 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-green-500/20 text-green-400'
            }`}>
              {activity.type === 'swap' ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">{activity.amount}</span>
                <span className="text-white/60">{activity.fromToken}</span>
                <span className="text-white/40">→</span>
                <span className="text-white/60">{activity.toToken}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/50">
                <Clock className="w-3 h-3" />
                <span>{activity.timestamp}</span>
                <span>•</span>
                <span>Rate: {activity.rate}</span>
              </div>
            </div>

            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              activity.status === 'completed'
                ? 'bg-green-500/20 text-green-400'
                : activity.status === 'pending'
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-red-500/20 text-red-400'
            }`}>
              {activity.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
