import React from 'react';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { LEADERSHIP_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import monumentalImg from '../assets/images/monumental_graphite_architecture_1791438157720.jpg';
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

export const LeadershipPage: React.FC = () => {
  return (
    <InstitutionalLayout>
      {/* 1. Dedicated Page Hero */}
      <PageHero
        eyebrow="LIDERANÇA & CORPO DIRETIVO"
        badge="EXECUTIVE BOARD"
        title={
          <>
            Experiência executiva <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              na tomada de decisões.
            </span>
          </>
        }
        subtitle="Liderança sênior presente em todas as fases do processo de diagnóstico, estruturação, governança e alocação de recursos."
        backgroundImage={monumentalImg}
        imageAlt="8C Inve$t - Corpo Diretivo e Tomada de Decisão Colegiada"
        imagePosition="object-right lg:object-[80%_center]"
      />

      {/* 2. Executive Profiles */}
      <section className="py-24 md:py-36 bg-[#0B0D0E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                {LEADERSHIP_CONTENT.subTitle}
              </span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400">
                {LEADERSHIP_CONTENT.identification}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-[52px] font-medium text-white leading-[1.08] tracking-tight mb-6 [text-wrap:balance]">
              {LEADERSHIP_CONTENT.title}
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
              {LEADERSHIP_CONTENT.description}
            </p>
          </div>

          {/* 3 Executive Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {LEADERSHIP_CONTENT.executives.map((exec, idx) => {
              const photoInfo = PARTNER_PHOTOS[exec.name];

              return (
                <div 
                  key={exec.name}
                  className={`bg-neutral-900/70 border border-white/10 rounded-[2px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between shadow-2xl hover:border-[#DFBD69] transition-all group backdrop-blur-sm ${
                    idx === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 w-full' : ''
                  }`}
                >
                  <div>
                    {/* Top Meta Line with Gold Partner Index */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3 border-b border-white/10">
                      <span className="text-[10.5px] font-mono font-medium tracking-[0.22em] text-[#DFBD69]">
                        SÓCIO 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
                        8C INVE$T
                      </span>
                    </div>

                    {/* Official Executive Photography Frame */}
                    <div className="relative w-full aspect-[4/4.8] rounded-[2px] overflow-hidden mb-6 sm:mb-7 bg-neutral-900 border border-white/15 group-hover:border-[#DFBD69]/70 transition-all duration-300 shadow-xl">
                      {photoInfo ? (
                        <img
                          src={photoInfo.src}
                          alt={photoInfo.alt}
                          className={`w-full h-full object-cover ${photoInfo.position} scale-100 group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-[#DFBD69] font-serif text-3xl">
                          {exec.initials}
                        </div>
                      )}
                      {/* Subtle bottom vignette on photo */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />
                      {/* Hairline gold accent on bottom edge */}
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBD69]/50 to-transparent group-hover:via-[#DFBD69] transition-colors" />
                    </div>

                    {/* Role */}
                    {exec.role && (
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#DFBD69] block mb-1.5">
                        {exec.role}
                      </span>
                    )}

                    {/* Name */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">
                      {exec.name}
                    </h3>

                    {/* Specialty */}
                    <p className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-400 font-semibold mb-6">
                      {exec.specialty}
                    </p>

                    {/* Areas of Action */}
                    <div className="pt-6 border-t border-white/10">
                      <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.22em] text-[#DFBD69] block mb-4">
                        ÁREAS DE ATUAÇÃO:
                      </span>
                      <ul className="space-y-2.5">
                        {exec.areas.map((area) => (
                          <li key={area} className="text-xs sm:text-[13px] text-neutral-300 font-sans flex items-center gap-2.5 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69] shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-10 pt-5 border-t border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    8C INVEST · CORPO DIRETIVO OFICIAL
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-neutral-400">
              LIDERANÇA SÊNIOR EM TODAS AS FASES
            </span>
            <CommercialCTA size="md">
              FALE COM A 8C
            </CommercialCTA>
          </div>

        </div>
      </section>
    </InstitutionalLayout>
  );
};
