import React from 'react';
import { LEADERSHIP_CONTENT } from '../data/content';
import photoCezar from '../assets/images/FOTO_CEZAR.png';
import photoLuiz from '../assets/images/FOTO_LUIZ.png';
import photoHeber from '../assets/images/FOTO_HEBER.png';

interface ExecutivePhotoInfo {
  src: string;
  alt: string;
  position: string;
}

const PARTNER_PHOTOS: Record<string, ExecutivePhotoInfo> = {
  'CÉZAR': {
    src: photoCezar,
    alt: 'Cézar — Presidente da 8C Inve$t',
    position: 'object-[center_top]',
  },
  'LUIZ FERNANDO': {
    src: photoLuiz,
    alt: 'Luiz Fernando — Sócio Diretor da 8C Inve$t',
    position: 'object-[center_top]',
  },
  'HEBER SANCHES': {
    src: photoHeber,
    alt: 'Heber Sanches — Sócio Diretor da 8C Inve$t',
    position: 'object-[center_top]',
  },
};

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
          {LEADERSHIP_CONTENT.executives.map((exec, idx) => {
            const photoInfo = PARTNER_PHOTOS[exec.name];

            return (
              <div 
                key={exec.name}
                className="bg-[#F9F8F5] border border-[#E5E3DC] rounded-[2px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#DFBD69] transition-all group"
              >
                <div>
                  {/* Top Meta Line with Partner Index */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5E3DC]">
                    <span className="text-[10.5px] font-mono font-medium tracking-[0.22em] text-[#B08A33]">
                      SÓCIO 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
                      8C INVE$T
                    </span>
                  </div>

                  {/* Official Executive Photography Frame */}
                  <div className="relative w-full aspect-[4/4.8] rounded-[2px] overflow-hidden mb-7 bg-white border border-[#E5E3DC] group-hover:border-[#DFBD69] transition-all duration-300 shadow-sm">
                    {photoInfo ? (
                      <img
                        src={photoInfo.src}
                        alt={photoInfo.alt}
                        className={`w-full h-full object-cover ${photoInfo.position} scale-100 group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-[#B08A33] font-serif text-3xl">
                        {exec.initials}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBD69]/60 to-transparent group-hover:via-[#DFBD69] transition-colors" />
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
