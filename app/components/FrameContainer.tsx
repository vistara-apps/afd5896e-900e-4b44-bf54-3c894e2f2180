'use client';

import { ReactNode } from 'react';

interface FrameContainerProps {
  children: ReactNode;
}

export function FrameContainer({ children }: FrameContainerProps) {
  return (
    <div className="max-w-full w-full mx-auto">
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  );
}
