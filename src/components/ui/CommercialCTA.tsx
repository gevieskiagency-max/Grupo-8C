import React from 'react';
import { LEAD_FORM_URL } from '../../data/content';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface CommercialCTAProps {
  children?: React.ReactNode;
  variant?: 'gold' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  iconType?: 'arrow-right' | 'arrow-up-right';
  ariaLabel?: string;
}

export const CommercialCTA: React.FC<CommercialCTAProps> = ({
  children = 'FALE COM A 8C',
  variant = 'gold',
  size = 'md',
  className = '',
  showIcon = true,
  iconType = 'arrow-right',
  ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 font-sans font-semibold uppercase tracking-[0.16em] transition-all duration-300 rounded-[2px] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2';

  let sizeClasses = '';
  if (size === 'sm') {
    sizeClasses = 'px-5 py-2.5 text-[11px]';
  } else if (size === 'lg') {
    sizeClasses = 'px-9 py-4 text-xs';
  } else {
    sizeClasses = 'px-8 py-3.5 text-xs';
  }

  let variantClasses = '';
  if (variant === 'gold') {
    variantClasses =
      'text-[#0B0D0E] bg-gradient-to-r from-[#DFBD69] via-[#E8CD82] to-[#C29B38] hover:from-[#ebd59b] hover:to-[#d4ae48] shadow-[0_4px_24px_rgba(223,189,105,0.25)] hover:shadow-[0_6px_30px_rgba(223,189,105,0.4)] focus-visible:ring-[#DFBD69]';
  } else if (variant === 'outline') {
    variantClasses =
      'text-white bg-black/30 hover:bg-white/10 border border-white/25 hover:border-white focus-visible:ring-white';
  } else if (variant === 'dark') {
    variantClasses =
      'text-white bg-neutral-900 hover:bg-neutral-800 border border-white/15 hover:border-[#DFBD69] focus-visible:ring-[#DFBD69]';
  }

  const IconComponent = iconType === 'arrow-up-right' ? ArrowUpRight : ArrowRight;

  return (
    <a
      href={LEAD_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Fale com a 8C Invest')}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      {showIcon && <IconComponent className="w-4 h-4 shrink-0" />}
    </a>
  );
};
