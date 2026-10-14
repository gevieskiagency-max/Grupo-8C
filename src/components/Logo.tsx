import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSignature?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showSignature = true,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <div className="flex items-baseline">
        <span className="font-serif text-2xl sm:text-[28px] font-bold tracking-tight inline-flex items-baseline">
          {/* 8C with refined gold finish from official brand */}
          <span 
            className="font-extrabold tracking-tight mr-1 bg-gradient-to-r from-[#C29B38] via-[#DFBD69] to-[#9E782F] bg-clip-text text-transparent font-sans"
            style={{ WebkitBackgroundClip: 'text' }}
          >
            8C
          </span>
          {/* Inve$t */}
          <span 
            className="font-extrabold tracking-tight bg-gradient-to-r from-[#C29B38] via-[#DFBD69] to-[#B08A33] bg-clip-text text-transparent font-sans ml-0.5"
            style={{ WebkitBackgroundClip: 'text' }}
          >
            Inve<span className="font-serif font-black text-[1.12em] text-[#C29B38] inline-block -translate-y-[0.5px]">$</span>t
          </span>
        </span>
      </div>
      
      {showSignature && (
        <span 
          className={`text-[8.5px] sm:text-[9.5px] uppercase font-sans font-semibold tracking-[0.28em] mt-1.5 transition-colors ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}
        >
          BUSINESS FOUND
        </span>
      )}
    </div>
  );
};
