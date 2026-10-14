import React from 'react';
import { METHODOLOGY_CONTENT } from '../data/content';

export const MethodologySection: React.FC = () => {
  return (
    <section 
      id="metodologia" 
      className="py-28 md:py-36 bg-white border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              {METHODOLOGY_CONTENT.label}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] leading-[1.08] tracking-tight mb-6 [text-wrap:balance]">
            {METHODOLOGY_CONTENT.title.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < METHODOLOGY_CONTENT.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed font-light">
            {METHODOLOGY_CONTENT.description}
          </p>
        </div>

        {/* 8 Principles Editorial Grid (4x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 border-t border-[#E5E3DC] pt-14">
          {METHODOLOGY_CONTENT.principles.map((p) => (
            <div 
              key={p.number}
              className="flex flex-col justify-start relative group"
            >
              {/* Header with Number and Title */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-xs font-semibold text-[#DFBD69]">
                  {p.number}
                </span>
                <span className="text-neutral-300 font-light" aria-hidden="true">—</span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0B0D0E] tracking-tight group-hover:text-[#B08A33] transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-neutral-600 leading-relaxed pt-4 border-t border-[#E5E3DC] font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
