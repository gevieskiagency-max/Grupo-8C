import React from 'react';
import { PILLARS_CONTENT } from '../data/content';

export const FourPillarsSection: React.FC = () => {
  return (
    <section 
      id="atuacao-360" 
      className="py-28 md:py-36 bg-white border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              {PILLARS_CONTENT.label}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] tracking-tight">
            {PILLARS_CONTENT.title}
          </h2>
        </div>

        {/* 4 Pillars Grid with Hairline Dividers & Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E3DC] border-t border-b border-[#E5E3DC]">
          {PILLARS_CONTENT.items.map((item, idx) => (
            <div 
              key={item.pilar}
              className="py-12 px-0 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between group transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-semibold text-[#DFBD69]">
                    0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover:bg-[#DFBD69] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B0D0E] tracking-tight mb-2 group-hover:text-neutral-700 transition-colors">
                  {item.pilar}
                </h3>

                <p className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#B08A33] mb-6">
                  {item.sub}
                </p>
              </div>

              <p className="font-sans text-sm text-neutral-600 leading-relaxed pt-6 border-t border-neutral-100 font-light">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
