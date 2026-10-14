import React from 'react';
import { VALUE_CYCLE_CONTENT } from '../data/content';

export const CycleSection: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-white border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              {VALUE_CYCLE_CONTENT.label}
            </span>
            <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] tracking-tight">
            Metodologia Contínua de Criação de Valor
          </h2>
        </div>

        {/* Process Flow - Luxury Horizontal Progression with Gold Accent Lines */}
        <div className="relative">
          
          {/* Desktop Gold Track Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-neutral-200 via-[#DFBD69] to-neutral-200 -z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {VALUE_CYCLE_CONTENT.steps.map((step, idx) => {
              const isLast = idx === VALUE_CYCLE_CONTENT.steps.length - 1;

              return (
                <div 
                  key={step.name}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Marker Badge with Gold Glow */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs font-semibold mb-6 transition-all duration-300 ${
                    isLast 
                      ? 'bg-[#0B0D0E] text-[#DFBD69] border border-[#DFBD69] shadow-[0_4px_20px_rgba(223,189,105,0.3)] scale-110' 
                      : 'bg-[#F9F8F5] border border-[#E5E3DC] text-neutral-700 group-hover:border-[#DFBD69] group-hover:text-[#B08A33] group-hover:scale-105'
                  }`}>
                    0{idx + 1}
                  </div>

                  {/* Step Name */}
                  <h3 className={`font-serif text-xl sm:text-2xl font-medium tracking-tight mb-3 transition-colors ${
                    isLast ? 'text-[#0B0D0E] font-bold' : 'text-neutral-900 group-hover:text-[#B08A33]'
                  }`}>
                    {step.name}
                  </h3>

                  {/* Subtle mobile indicator */}
                  {!isLast && (
                    <div className="lg:hidden text-[#DFBD69] my-2">
                      <span className="text-sm">↓</span>
                    </div>
                  )}

                  {/* Step Description */}
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-[210px] font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
