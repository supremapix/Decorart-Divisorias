
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  return (
    <div className={`flex flex-col items-start leading-none select-none ${className}`}>
      {/* Texto Superior: DECORART */}
      <div 
        className="font-black italic tracking-tighter" 
        style={{ 
          color: '#9C7C13', 
          fontSize: '2.2em',
          fontStyle: 'italic',
          transform: 'skewX(-5deg)'
        }}
      >
        DECORART
      </div>
      
      {/* Linha Inferior: Design + DIVISÓRIAS */}
      <div className="flex items-center w-full mt-[-0.2em]">
        {/* As 3 Linhas de Design */}
        <div className="flex flex-col gap-[2px] mr-2 flex-grow max-w-[80px]">
          <div className="h-[2px] w-full bg-black"></div>
          <div className="h-[2px] w-full bg-black"></div>
          <div className="h-[2px] w-full bg-black"></div>
        </div>
        
        {/* Texto DIVISÓRIAS */}
        <div 
          className="font-bold tracking-[0.2em] text-black"
          style={{ fontSize: '0.9em' }}
        >
          DIVISÓRIAS
        </div>
      </div>
    </div>
  );
};
