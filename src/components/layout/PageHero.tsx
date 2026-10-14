import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string | React.ReactNode;
  subtitle?: string;
  backgroundImage: string;
  imageAlt: string;
  accentColor?: string;
  theme?: 'dark' | 'navy';
  badge?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  imageAlt,
  accentColor = '#DFBD69',
  theme = 'dark',
  badge,
}) => {
  const isNavy = theme === 'navy';
  const bgColor = isNavy ? 'bg-[#0A192F]' : 'bg-[#0B0D0E]';
  const overlayGradient = isNavy
    ? 'from-[#0A192F]/95 via-[#0A192F]/80 to-transparent'
    : 'from-[#0B0D0E]/95 via-[#0B0D0E]/80 to-transparent';

  return (
    <div className={`relative w-full min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] flex items-center overflow-hidden ${bgColor} text-white pt-32 pb-16 lg:py-0 border-b border-white/10`}>
      {/* Background with cinematic lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover object-center scale-100"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient for pristine editorial legibility */}
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradient} pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${isNavy ? 'from-[#0A192F]' : 'from-[#0B0D0E]'} to-transparent pointer-events-none`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 py-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1.5px]" style={{ backgroundColor: accentColor }} />
            <span 
              className="text-[11px] font-sans font-semibold tracking-[0.24em] uppercase"
              style={{ color: accentColor }}
            >
              {eyebrow}
            </span>
            {badge && (
              <>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-[10px] font-sans text-neutral-300 uppercase tracking-[0.18em]">
                  {badge}
                </span>
              </>
            )}
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.08] tracking-tight text-white mb-6 [text-wrap:balance]">
            {title}
          </h1>

          {/* Subtitle / Lead */}
          {subtitle && (
            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
