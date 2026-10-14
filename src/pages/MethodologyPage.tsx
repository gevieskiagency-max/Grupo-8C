import React from 'react';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { METHODOLOGY_CONTENT, VALUE_CYCLE_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import pavilionImg from '../assets/images/stone_glass_capital_pavilion_1791438170406.jpg';

export const MethodologyPage: React.FC = () => {
  return (
    <InstitutionalLayout>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="METODOLOGIA E EXECUÇÃO"
        badge="THE 8 PRINCIPLES"
        title={
          <>
            Não entregamos apenas recomendações. <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              Construímos junto.
            </span>
          </>
        }
        subtitle="Nossa metodologia começa pela compreensão profunda do negócio e evolui para a construção e implementação das soluções com disciplina e governança."
        backgroundImage={pavilionImg}
        imageAlt="8C Inve$t - Arquitetura de Rigor e Execução Metodológica"
      />

      {/* 2. The 8 Principles in Prestigious Two-Column Editorial Layout */}
      <section className="py-24 md:py-36 bg-[#0B0D0E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                {METHODOLOGY_CONTENT.label}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-[52px] font-medium text-white leading-[1.08] tracking-tight mb-6 [text-wrap:balance]">
              {METHODOLOGY_CONTENT.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < METHODOLOGY_CONTENT.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
              {METHODOLOGY_CONTENT.description}
            </p>
          </div>

          {/* 8 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-t border-white/10 pt-16">
            {METHODOLOGY_CONTENT.principles.map((p) => (
              <div 
                key={p.number}
                className="p-8 sm:p-10 bg-neutral-900/60 border border-white/10 rounded-[2px] flex flex-col justify-start hover:border-[#DFBD69]/60 transition-all group"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-xs font-semibold text-[#DFBD69]">
                    {p.number}
                  </span>
                  <span className="text-white/20 font-light" aria-hidden="true">—</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-[#DFBD69] transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed pt-4 border-t border-white/10 font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Ciclo de Valorização (Incorporated into /metodologia) */}
      <section className="py-24 md:py-36 bg-[#111315] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                {VALUE_CYCLE_CONTENT.label}
              </span>
              <span className="w-5 h-[1.5px] bg-[#DFBD69]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white tracking-tight">
              Metodologia Contínua de Criação de Valor
            </h2>
          </div>

          {/* Process Flow - Luxury Progression */}
          <div className="relative">
            <div 
              aria-hidden="true" 
              className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-white/10 via-[#DFBD69] to-white/10 -z-0" 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
              {VALUE_CYCLE_CONTENT.steps.map((step, idx) => {
                const isLast = idx === VALUE_CYCLE_CONTENT.steps.length - 1;

                return (
                  <div 
                    key={step.name}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs font-semibold mb-6 transition-all duration-300 ${
                      isLast 
                        ? 'bg-[#DFBD69] text-[#0B0D0E] shadow-[0_4px_24px_rgba(223,189,105,0.4)] scale-110' 
                        : 'bg-neutral-900 border border-white/15 text-neutral-300 group-hover:border-[#DFBD69] group-hover:text-[#DFBD69]'
                    }`}>
                      0{idx + 1}
                    </div>

                    <h3 className={`font-serif text-xl sm:text-2xl font-medium tracking-tight mb-3 ${
                      isLast ? 'text-[#DFBD69] font-bold' : 'text-white'
                    }`}>
                      {step.name}
                    </h3>

                    {!isLast && (
                      <div className="lg:hidden text-[#DFBD69] my-2">
                        <span className="text-sm">↓</span>
                      </div>
                    )}

                    <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-[210px] font-light">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-xs uppercase font-sans tracking-[0.2em] text-neutral-400">
                EXECUÇÃO ESTRATÉGICA E DISCIPLINA DE GESTÃO
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
