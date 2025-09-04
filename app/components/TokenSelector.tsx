'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TokenSelectorProps {
  selectedToken: string;
  onTokenChange: (token: string) => void;
  label: string;
}

const tokens = [
  { symbol: 'USDC', name: 'USD Coin', color: 'bg-blue-500' },
  { symbol: 'DAI', name: 'Dai Stablecoin', color: 'bg-yellow-500' },
  { symbol: 'USDT', name: 'Tether USD', color: 'bg-green-500' },
  { symbol: 'FRAX', name: 'Frax', color: 'bg-purple-500' },
];

export function TokenSelector({ selectedToken, onTokenChange, label }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedTokenInfo = tokens.find(t => t.symbol === selectedToken);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-2 transition-colors border border-white/10"
      >
        <div className={`w-8 h-8 ${selectedTokenInfo?.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
          {selectedToken.charAt(0)}
        </div>
        <div className="text-left">
          <div className="text-white font-medium">{selectedToken}</div>
          <div className="text-white/60 text-xs">{selectedTokenInfo?.name}</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-sm rounded-xl border border-white/10 p-2 z-50">
          {tokens.map((token) => (
            <button
              key={token.symbol}
              onClick={() => {
                onTokenChange(token.symbol);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-white/10 ${
                token.symbol === selectedToken ? 'bg-white/10' : ''
              }`}
            >
              <div className={`w-8 h-8 ${token.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                {token.symbol.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-white font-medium">{token.symbol}</div>
                <div className="text-white/60 text-xs">{token.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
