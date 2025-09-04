'use client';

import { useState } from 'react';
import { TokenSelector } from './TokenSelector';
import { SwapButton } from './SwapButton';
import { ArrowDownUp, Settings, Zap } from 'lucide-react';

export function SwapInterface() {
  const [fromToken, setFromToken] = useState('USDC');
  const [toToken, setToToken] = useState('DAI');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const bestRoutes = [
    { protocol: 'Uniswap V3', rate: '1.0012', gas: '$2.45', time: '~15s' },
    { protocol: 'Curve', rate: '1.0008', gas: '$3.20', time: '~20s' },
    { protocol: 'Balancer', rate: '1.0005', gas: '$2.80', time: '~18s' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Swap</h1>
        <p className="text-white/60">Find the best rates across Base protocols</p>
      </div>

      {/* Swap Interface */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-semibold">Swap Tokens</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-1 text-sm text-white/70">
              <Zap className="w-4 h-4" />
              <span>Fast Mode</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* From Token */}
          <div className="space-y-2">
            <label className="text-white/70 text-sm">From</label>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <TokenSelector
                  selectedToken={fromToken}
                  onTokenChange={setFromToken}
                  label="From"
                />
                <div className="text-right">
                  <input
                    type="number"
                    placeholder="0.0"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="bg-transparent text-white text-2xl font-semibold text-right outline-none placeholder-white/30"
                  />
                  <div className="text-white/50 text-sm">Balance: 1,250.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwapTokens}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10"
            >
              <ArrowDownUp className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* To Token */}
          <div className="space-y-2">
            <label className="text-white/70 text-sm">To</label>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <TokenSelector
                  selectedToken={toToken}
                  onTokenChange={setToToken}
                  label="To"
                />
                <div className="text-right">
                  <input
                    type="number"
                    placeholder="0.0"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    className="bg-transparent text-white text-2xl font-semibold text-right outline-none placeholder-white/30"
                  />
                  <div className="text-white/50 text-sm">Balance: 432.18</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slippage Settings */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/70 text-sm">Slippage Tolerance</span>
            <div className="flex items-center space-x-2">
              {['0.1', '0.5', '1.0'].map((value) => (
                <button
                  key={value}
                  onClick={() => setSlippage(value)}
                  className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                    slippage === value
                      ? 'bg-accent text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <SwapButton
          fromToken={fromToken}
          toToken={toToken}
          fromAmount={fromAmount}
          disabled={!fromAmount || !toAmount}
        />
      </div>

      {/* Best Routes */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-lg font-semibold mb-4">Best Routes</h3>
        <div className="space-y-3">
          {bestRoutes.map((route, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-colors cursor-pointer ${
                index === 0
                  ? 'bg-accent/10 border-accent/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-accent' : 'bg-white/40'
                  }`}></div>
                  <span className="text-white font-medium">{route.protocol}</span>
                  {index === 0 && (
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                      Best
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">1 USDC = {route.rate} DAI</div>
                  <div className="text-white/60 text-sm">{route.gas} • {route.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
