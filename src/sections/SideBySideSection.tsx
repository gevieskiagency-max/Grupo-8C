import React from 'react';
import { SIDE_BY_SIDE_CONTENT } from '../data/content';

export const SideBySideSection: React.FC = () => {
  return (
    <section className="py-32 md:py-44 bg-[#F9F8F5] border-b border-[#E5E3DC]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
            {SIDE_BY_SIDE_CONTENT.label}
          </span>
          <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] mb-16 tracking-tight">
          {SIDE_BY_SIDE_CONTENT.title}
        </h2>

        {/* Highlight Statements */}
        <div className="my-12 max-w-4xl mx-auto space-y-4">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-500 font-light leading-snug">
            {SIDE_BY_SIDE_CONTENT.lead1}
          </p>
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0B0D0E] font-medium leading-tight">
            {SIDE_BY_SIDE_CONTENT.lead2}
          </p>
        </div>

        {/* Description */}
        <div className="mt-16 pt-12 border-t border-[#E5E3DC] max-w-2xl mx-auto">
          <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed font-light">
            {SIDE_BY_SIDE_CONTENT.description}
          </p>
        </div>

      </div>
    </section>
  );
};
