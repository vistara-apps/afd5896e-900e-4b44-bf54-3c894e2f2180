'use client';

import { useState, useEffect } from 'react';
import { FrameContainer } from './components/FrameContainer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { SwapInterface } from './components/SwapInterface';
import { YieldOpportunities } from './components/YieldOpportunities';

export default function Home() {
  const [activeView, setActiveView] = useState<'dashboard' | 'swap' | 'yield'>('dashboard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <FrameContainer>
        <div className="flex h-screen">
          <Sidebar activeView={activeView} onViewChange={setActiveView} />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6 overflow-auto">
              {activeView === 'dashboard' && <Dashboard />}
              {activeView === 'swap' && <SwapInterface />}
              {activeView === 'yield' && <YieldOpportunities />}
            </main>
          </div>
        </div>
      </FrameContainer>
    </div>
  );
}
