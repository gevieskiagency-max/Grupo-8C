import React from 'react';
import { PURPOSE_CONTENT } from '../data/content';

export const PurposeSection: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-white border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
                {PURPOSE_CONTENT.label}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] leading-[1.08] tracking-tight mb-8 [text-wrap:balance]">
              {PURPOSE_CONTENT.title}
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl font-light">
              {PURPOSE_CONTENT.description}
            </p>
          </div>

          {/* Right Column: 4 Clean Typography Blocks with Gold Accents */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {PURPOSE_CONTENT.elements.map((elem) => (
                <div 
                  key={elem}
                  className="p-8 bg-[#F9F8F5] border border-[#E5E3DC] rounded-[2px] flex flex-col justify-center items-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#DFBD69] transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69] mb-4 group-hover:scale-125 transition-transform" />
                  <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.16em] text-[#0B0D0E]">
                    {elem}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
