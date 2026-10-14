import React from 'react';
import { ABOUT_CONTENT } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="a-8c" 
      className="py-28 md:py-36 bg-[#F9F8F5] border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Sub-label with hairline indicator */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
            {ABOUT_CONTENT.label}
          </span>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Monumental Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] leading-[1.08] tracking-tight [text-wrap:balance]">
              {ABOUT_CONTENT.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < ABOUT_CONTENT.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            
            <div className="mt-10 pt-8 border-t border-[#E5E3DC] hidden lg:block">
              <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400 font-sans font-medium block">
                GESTÃO · GOVERNANÇA · VALORIZAÇÃO
              </span>
            </div>
          </div>

          {/* Right Column: Refined Editorial Prose */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-neutral-700 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
            <p className="border-l-2 border-[#DFBD69] pl-8 text-[#0B0D0E] font-normal leading-relaxed">
              {ABOUT_CONTENT.paragraph1}
            </p>
            <p className="pl-8 text-neutral-600 font-light leading-relaxed">
              {ABOUT_CONTENT.paragraph2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
