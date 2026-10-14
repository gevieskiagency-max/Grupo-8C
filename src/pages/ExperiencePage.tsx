import React from 'react';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { EXPERIENCE_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import { CorporateBrandsPanel } from '../components/brands/CorporateBrandsPanel';
import archImg from '../assets/images/hero_architectural_structure_1791436213860.jpg';

const ORGANIZATION_ITEMS = [
  { name: 'Coca-Cola', sector: 'Bebidas & Consumo', note: 'Escala Global' },
  { name: 'Grupo Pão de Açúcar', sector: 'Varejo Alimentar', note: 'Operação Nacional' },
  { name: 'Assaí', sector: 'Atacarejo & Distribuição', note: 'Expansão & Governança' },
  { name: 'Walmart', sector: 'Varejo Multicanal', note: 'Gestão de Grandes Redes' },
  { name: 'Grupo Muffato', sector: 'Supermercados & Atacado', note: 'Logística & Suprimentos' },
  { name: 'Aker Solutions', sector: 'Energia & Engenharia', note: 'Infraestrutura Complexa' },
  { name: 'Delta', sector: 'Aviação & Serviços', note: 'Operações Críticas' },
  { name: 'Toyota', sector: 'Indústria Automotiva', note: 'Lean & Qualidade Total' },
  { name: 'Renault', sector: 'Indústria Automotiva', note: 'Manufatura & Gestão' },
  { name: 'FORVIA / Faurecia', sector: 'Tecnologia Automotiva', note: 'Tier 1 Global' },
];

export const ExperiencePage: React.FC = () => {
  return (
    <InstitutionalLayout>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="EXPERIÊNCIA EXECUTIVA"
        badge="EXECUTIVE TRACK RECORD"
        title={
          <>
            Experiência prática de gestão <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              aplicada à realidade empresarial.
            </span>
          </>
        }
        subtitle="A experiência executiva dos sócios reúne atuação em grandes organizações e projetos, gerando uma visão prática sobre gestão, operação, capital, transformação e crescimento empresarial."
        backgroundImage={archImg}
        imageAlt="8C Inve$t - Trajetória Executiva e Liderança Corporativa"
        imagePosition="object-right lg:object-[75%_center]"
      />

      {/* 2. Frase de Credibilidade dos Sócios */}
      <section className="py-24 md:py-36 bg-[#0B0D0E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="p-6 sm:p-10 md:p-16 bg-neutral-900/60 border-l-2 border-[#DFBD69] border-t border-r border-b border-white/10 rounded-[2px] shadow-2xl">
            <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.22em] text-[#DFBD69] block mb-4">
              PRINCÍPIO DE CREDIBILIDADE
            </span>
            <p className="font-serif italic text-xl sm:text-3xl md:text-4xl text-white leading-relaxed max-w-4xl font-light">
              {EXPERIENCE_CONTENT.highlightQuote}
            </p>
            <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-neutral-400 font-sans">
              <span>SOLIDEZ DE HISTÓRICO</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>LIDERANÇA EM GRANDES OPERAÇÕES</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Trajetória Executiva - As 10 Organizações */}
      <section className="py-24 md:py-36 bg-[#111315] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
                <span className="text-[10.5px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                  {EXPERIENCE_CONTENT.organizationsLabel}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-[52px] font-medium text-white tracking-tight">
                {EXPERIENCE_CONTENT.organizationsTitle}
              </h2>
            </div>
            
            <span className="text-xs text-neutral-400 font-sans tracking-wider">
              10 corporações multinacionais e líderes setoriais
            </span>
          </div>

          {/* 10 Organizations Panel with Authentic Logos */}
          <div className="mt-8">
            <CorporateBrandsPanel />
          </div>

          {/* Strict Compliance Governance Disclaimer */}
          <div className="mt-14 text-xs text-neutral-400 font-sans leading-relaxed border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start gap-1 sm:gap-2.5">
            <span className="font-semibold text-white shrink-0">Nota Institucional de Governança:</span>
            <span className="font-light">
              {EXPERIENCE_CONTENT.disclaimer}
            </span>
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-neutral-400">
              SOLIDEZ · EXPERIÊNCIA EXECUTIVA · GOVERNANÇA
            </span>
            <CommercialCTA size="md">
              FALE COM A 8C INVEST
            </CommercialCTA>
          </div>

        </div>
      </section>
    </InstitutionalLayout>
  );
};
