import React from 'react';
import { VISION_CONTENT } from '../data/content';

export const VisionSection: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-[#F9F8F5] border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              {VISION_CONTENT.label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] leading-[1.08] tracking-tight mb-10 [text-wrap:balance]">
            {VISION_CONTENT.title}
          </h2>

          {/* Main Description */}
          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-light mb-14">
            {VISION_CONTENT.description}
          </p>

          {/* Complementary Message in a Dignified Architectural Box */}
          <div className="p-8 md:p-12 bg-white border-l-2 border-[#DFBD69] border-t border-r border-b border-[#E5E3DC] rounded-[2px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.22em] text-[#B08A33] block mb-3">
              DIRETRIZ ESTRATÉGICA
            </span>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0B0D0E] font-medium leading-snug">
              {VISION_CONTENT.complementaryMessage}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
