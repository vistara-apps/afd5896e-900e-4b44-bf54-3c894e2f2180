'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Loader2, ArrowRight } from 'lucide-react';

interface SwapButtonProps {
  fromToken: string;
  toToken: string;
  fromAmount: string;
  disabled: boolean;
}

export function SwapButton({ fromToken, toToken, fromAmount, disabled }: SwapButtonProps) {
  const { isConnected } = useAccount();
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = async () => {
    setIsSwapping(true);
    // Simulate swap process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSwapping(false);
  };

  if (!isConnected) {
    return (
      <div className="mt-6">
        <ConnectWallet className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-xl transition-colors" />
      </div>
    );
  }

  return (
    <button
      onClick={handleSwap}
      disabled={disabled || isSwapping}
      className="w-full bg-accent hover:bg-accent/90 disabled:bg-white/10 disabled:text-white/40 text-white font-semibold py-4 rounded-xl transition-colors mt-6 flex items-center justify-center space-x-2"
    >
      {isSwapping ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Swapping...</span>
        </>
      ) : (
        <>
          <span>
            {disabled ? 'Enter Amount' : `Swap ${fromToken} to ${toToken}`}
          </span>
          {!disabled && <ArrowRight className="w-5 h-5" />}
        </>
      )}
    </button>
  );
}
