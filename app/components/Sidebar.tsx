'use client';

import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  TrendingUp, 
  Wallet, 
  History, 
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeView: 'dashboard' | 'swap' | 'yield';
  onViewChange: (view: 'dashboard' | 'swap' | 'yield') => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'swap', label: 'Swap', icon: ArrowLeftRight },
  { id: 'yield', label: 'Yield', icon: TrendingUp },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'history', label: 'History', icon: History },
];

const bottomItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help', icon: HelpCircle },
  { id: 'logout', label: 'Logout', icon: LogOut },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-black/30 backdrop-blur-sm border-r border-white/10 p-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <span className="text-white font-semibold">Base</span>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (item.id === 'dashboard' || item.id === 'swap' || item.id === 'yield') {
                onViewChange(item.id);
              }
            }}
            className={cn(
              "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left",
              activeView === item.id
                ? "bg-accent text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-2">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left text-white/70 hover:text-white hover:bg-white/10"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
