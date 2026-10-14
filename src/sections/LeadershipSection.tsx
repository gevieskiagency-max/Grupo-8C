import React from 'react';
import { LEADERSHIP_CONTENT } from '../data/content';

export const LeadershipSection: React.FC = () => {
  return (
    <section 
      id="lideranca" 
      className="py-28 md:py-36 bg-white border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              {LEADERSHIP_CONTENT.label}
            </span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400">
              {LEADERSHIP_CONTENT.identification}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] leading-[1.08] tracking-tight mb-6 [text-wrap:balance]">
            {LEADERSHIP_CONTENT.title}
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed font-light">
            {LEADERSHIP_CONTENT.description}
          </p>
        </div>

        {/* 3 Executive Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {LEADERSHIP_CONTENT.executives.map((exec, idx) => (
            <div 
              key={exec.name}
              className="bg-[#F9F8F5] border border-[#E5E3DC] rounded-[2px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#DFBD69] transition-all group"
            >
              <div>
                {/* Monogram / Header with Gold Rim */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E5E3DC]">
                  <div className="w-14 h-14 rounded-[2px] bg-white border border-[#DFBD69]/40 flex items-center justify-center shadow-xs group-hover:border-[#DFBD69] transition-colors">
                    <span className="font-serif font-bold text-base tracking-widest bg-gradient-to-r from-[#C29B38] to-[#DFBD69] bg-clip-text text-transparent">
                      {exec.initials}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    SÓCIO 0{idx + 1}
                  </span>
                </div>

                {/* Role */}
                {exec.role && (
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#B08A33] block mb-1.5">
                    {exec.role}
                  </span>
                )}

                {/* Name */}
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B0D0E] tracking-tight mb-2">
                  {exec.name}
                </h3>

                {/* Specialty */}
                <p className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 font-semibold mb-8">
                  {exec.specialty}
                </p>

                {/* Areas of action */}
                <div className="pt-6 border-t border-[#E5E3DC]">
                  <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.22em] text-neutral-400 block mb-4">
                    ÁREAS DE ATUAÇÃO:
                  </span>
                  <ul className="space-y-2.5">
                    {exec.areas.map((area) => (
                      <li key={area} className="text-xs sm:text-[13px] text-neutral-700 font-sans flex items-center gap-2.5 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69] shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-5 border-t border-[#E5E3DC] text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                8C INVEST · CORPO DIRETIVO OFICIAL
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
