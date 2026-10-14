import React from 'react';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { ABOUT_CONTENT, SIDE_BY_SIDE_CONTENT, PURPOSE_CONTENT, VISION_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import monumentalArchImg from '../assets/images/monumental_graphite_architecture_1791438157720.jpg';

export const AboutPage: React.FC = () => {
  return (
    <InstitutionalLayout>
      {/* 1. Dedicated Cinematic Page Hero */}
      <PageHero
        eyebrow="IDENTIDADE INSTITUCIONAL"
        badge="THE INSTITUTION"
        title={
          <>
            Estrutura para transformar <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              desafios em crescimento.
            </span>
          </>
        }
        subtitle="A 8C Invest atua na estruturação, transformação e valorização de empresas, integrando capital, estratégia, governança e gestão para transformar desafios empresariais em oportunidades concretas de crescimento."
        backgroundImage={monumentalArchImg}
        imageAlt="8C Inve$t - Arquitetura Monumental de Governança e Gestão"
        imagePosition="object-right lg:object-[75%_center]"
      />

      {/* 2. Sobre a 8C - Editorial Authority Section */}
      <section className="py-24 md:py-32 bg-[#0B0D0E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
              {ABOUT_CONTENT.label}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-[52px] font-medium text-white leading-[1.08] tracking-tight [text-wrap:balance]">
                {ABOUT_CONTENT.title.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < ABOUT_CONTENT.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <div className="mt-10 pt-8 border-t border-white/10 hidden lg:block">
                <span className="text-[11px] uppercase tracking-[0.24em] text-neutral-400 font-sans font-medium">
                  SOLIDEZ · DISCIPLINA · INTELIGÊNCIA DE MERCADO
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              <p className="border-l-2 border-[#DFBD69] pl-8 text-white font-normal leading-relaxed">
                {ABOUT_CONTENT.paragraph1}
              </p>
              <p className="pl-8 text-neutral-400 font-light leading-relaxed">
                {ABOUT_CONTENT.paragraph2}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Execução — Construção Lado a Lado */}
      <section className="py-28 md:py-36 bg-[#111315] text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
              {SIDE_BY_SIDE_CONTENT.label}
            </span>
            <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white mb-16 tracking-tight">
            {SIDE_BY_SIDE_CONTENT.title}
          </h2>

          <div className="my-12 max-w-4xl mx-auto space-y-4">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-400 font-light leading-snug">
              {SIDE_BY_SIDE_CONTENT.lead1}
            </p>
            <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-medium leading-tight">
              {SIDE_BY_SIDE_CONTENT.lead2}
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 max-w-2xl mx-auto">
            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
              {SIDE_BY_SIDE_CONTENT.description}
            </p>
          </div>

        </div>
      </section>

      {/* 4. Nosso Propósito */}
      <section className="py-24 md:py-32 bg-[#0B0D0E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
                <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                  {PURPOSE_CONTENT.label}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white leading-[1.08] tracking-tight mb-8 [text-wrap:balance]">
                {PURPOSE_CONTENT.title}
              </h2>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl font-light">
                {PURPOSE_CONTENT.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {PURPOSE_CONTENT.elements.map((elem) => (
                  <div 
                    key={elem}
                    className="p-8 bg-neutral-900/80 border border-white/10 rounded-[2px] flex flex-col justify-center items-center text-center hover:border-[#DFBD69] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69] mb-4 group-hover:scale-125 transition-transform" />
                    <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.16em] text-white">
                      {elem}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Nossa Visão */}
      <section className="py-24 md:py-32 bg-[#111315] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                {VISION_CONTENT.label}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white leading-[1.08] tracking-tight mb-10 [text-wrap:balance]">
              {VISION_CONTENT.title}
            </h2>

            <p className="font-sans text-lg sm:text-xl text-neutral-300 leading-relaxed font-light mb-14">
              {VISION_CONTENT.description}
            </p>

            <div className="p-8 md:p-12 bg-neutral-900/90 border-l-2 border-[#DFBD69] border-t border-r border-b border-white/10 rounded-[2px] shadow-2xl">
              <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.22em] text-[#DFBD69] block mb-3">
                DIRETRIZ ESTRATÉGICA
              </span>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-snug">
                {VISION_CONTENT.complementaryMessage}
              </p>
            </div>

            <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-xs uppercase font-sans tracking-[0.2em] text-neutral-400">
                8C INVE$T · BUSINESS FOUND
              </span>
              <CommercialCTA size="md">
                FALE COM A 8C
              </CommercialCTA>
            </div>

          </div>
        </div>
      </section>
    </InstitutionalLayout>
  );
};
