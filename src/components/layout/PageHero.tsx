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
  imagePosition?: string;
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
  imagePosition = 'object-center',
}) => {
  const isNavy = theme === 'navy';
  const bgColor = isNavy ? 'bg-[#0A192F]' : 'bg-[#0B0D0E]';
  
  // Sophisticated directional overlay: strong dark presence on the left behind editorial text,
  // fluidly transitioning toward the right to showcase the architectural imagery with full fidelity.
  const gradientOverlay = isNavy
    ? 'from-[#0A192F]/98 via-[#0A192F]/85 md:via-[#0A192F]/55 to-transparent'
    : 'from-[#0B0D0E]/98 via-[#0B0D0E]/85 md:via-[#0B0D0E]/50 to-transparent';

  return (
    <div 
      className={`relative w-full min-h-[68svh] md:min-h-[72vh] lg:min-h-[85vh] flex flex-col justify-center overflow-hidden ${bgColor} text-white pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 lg:pb-20 border-b border-white/10`}
    >
      {/* 1. Cinematic Background Image - 100% Coverage with Precision Framing */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={imageAlt}
          className={`w-full h-full object-cover ${imagePosition} scale-100 transition-transform duration-1000 ease-out`}
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* 2. Layered Readability Protection */}
        {/* Ambient base dimming ensuring solid contrast on mobile where text covers full width */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/15 pointer-events-none" />

        {/* Directional contrast gradient from left to right */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientOverlay} pointer-events-none`} />

        {/* Subtle top shade ensuring header menu contrast */}
        <div className={`absolute top-0 left-0 right-0 h-36 bg-gradient-to-b ${isNavy ? 'from-[#0A192F]/90' : 'from-[#0B0D0E]/90'} to-transparent pointer-events-none`} />

        {/* Soft bottom vignette to merge seamlessly with following sections */}
        <div className={`absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t ${isNavy ? 'from-[#0A192F]' : 'from-[#0B0D0E]'} to-transparent pointer-events-none`} />
      </div>

      {/* 3. Typography Content Container - Vertically Centered with Luxury Breathing Space */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-6 lg:px-12 py-6 sm:py-10">
        <div className="relative max-w-3xl">
          {/* Subtle diffused contrast halo behind typography — no visible box, perfectly seamless */}
          <div 
            aria-hidden="true" 
            className={`absolute -inset-6 sm:-inset-10 -z-10 rounded-full ${
              isNavy ? 'bg-[#0A192F]/75' : 'bg-[#0B0D0E]/75'
            } blur-3xl pointer-events-none`} 
          />

          {/* Eyebrow & Badge */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 px-3 py-1.5 sm:px-3.5 rounded-[2px] bg-black/50 backdrop-blur-md border border-white/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            <span className="w-3.5 sm:w-4 h-[1.5px]" style={{ backgroundColor: accentColor }} />
            <span 
              className="text-[9.5px] sm:text-[10.5px] font-sans font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase"
              style={{ color: accentColor }}
            >
              {eyebrow}
            </span>
            {badge && (
              <>
                <span aria-hidden="true" className="text-white/30 text-xs">·</span>
                <span className="text-[9px] sm:text-[10px] font-sans text-neutral-300 uppercase tracking-[0.16em] sm:tracking-[0.18em]">
                  {badge}
                </span>
              </>
            )}
          </div>

          {/* Main Editorial Headline with refined subtle drop shadow */}
          <h1 className="font-serif text-[28px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium leading-[1.08] sm:leading-[1.06] tracking-tight text-white mb-5 sm:mb-6 [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            {title}
          </h1>

          {/* Subtitle / Lead Paragraph with subtle readability shadow */}
          {subtitle && (
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 leading-relaxed font-light max-w-2xl [text-wrap:pretty] drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
