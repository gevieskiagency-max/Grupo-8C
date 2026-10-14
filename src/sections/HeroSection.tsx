import React from 'react';
import { HERO_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import heroBackground from '../assets/images/hero_skyline_fita_dourada.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-[95vh] md:min-h-screen flex items-center overflow-hidden bg-[#0B0D0E] text-white pt-24 pb-16 lg:py-0"
    >
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="8C Inve$t - Horizonte Financeiro Internacional e Escultura em Fita Dourada"
          className="w-full h-full object-cover object-[70%_center] lg:object-[80%_center] scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* 2. Measured Cinematic Contrast Gradients */}
        {/* Left-to-right gradient to guarantee flawless typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0E]/95 via-[#0B0D0E]/80 md:via-[#0B0D0E]/55 to-transparent pointer-events-none" />
        
        {/* Top subtle vignette for header integration */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0B0D0E]/80 to-transparent pointer-events-none" />

        {/* Bottom edge fade for seamless section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0D0E] to-transparent pointer-events-none" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow and Exclusivity Label */}
          <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 rounded-[2px] bg-black/40 backdrop-blur-md border border-white/10">
            <span className="font-sans font-semibold text-[#DFBD69] tracking-[0.22em] text-[10.5px] uppercase">
              {HERO_CONTENT.eyebrow}
            </span>
            <span aria-hidden="true" className="text-white/30 text-xs">·</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-300">
              {HERO_CONTENT.badgeLabel}
            </span>
          </div>

          {/* Main Cinematic Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.06] tracking-tight text-white mb-8 [text-wrap:balance]">
            Capital inteligente <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              para transformar
            </span> <br />
            empresas em valor.
          </h1>

          {/* Institutional Description */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-200/90 leading-relaxed max-w-2xl mb-10 font-light">
            {HERO_CONTENT.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-14">
            <CommercialCTA size="lg">
              {HERO_CONTENT.ctaPrimary.toUpperCase()}
            </CommercialCTA>

            <a
              href="#atuacao-360"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white bg-black/30 hover:bg-white/10 border border-white/25 hover:border-white transition-all duration-300 rounded-[2px] backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {HERO_CONTENT.ctaSecondary.toUpperCase()}
            </a>
          </div>

          {/* Bottom Complementary Elements & Signature */}
          <div className="pt-8 border-t border-white/15">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-sans font-medium text-neutral-300 uppercase tracking-widest">
              {HERO_CONTENT.complementaryElements.map((item, idx) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69]" />
                  <span>{item}</span>
                  {idx < HERO_CONTENT.complementaryElements.length - 1 && (
                    <span aria-hidden="true" className="hidden sm:inline text-white/20 ml-4">·</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 text-[11px] font-sans text-neutral-400 tracking-[0.24em] uppercase">
              <span>{HERO_CONTENT.signature}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
