import React from 'react';
import { EXPERIENCE_CONTENT } from '../data/content';
import { CorporateBrandsPanel } from '../components/brands/CorporateBrandsPanel';

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

export const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experiencia" 
      className="py-28 md:py-36 bg-[#F9F8F5] border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
              {EXPERIENCE_CONTENT.label}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] leading-[1.08] tracking-tight mb-8 [text-wrap:balance]">
            {EXPERIENCE_CONTENT.title}
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed font-light">
            {EXPERIENCE_CONTENT.description}
          </p>
        </div>

        {/* Master Quote Block in Luxurious Editorial Frame */}
        <div className="mb-24 p-10 md:p-16 bg-white border-l-2 border-[#DFBD69] border-t border-r border-b border-[#E5E3DC] rounded-[2px] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#0B0D0E] leading-relaxed max-w-4xl font-normal">
            {EXPERIENCE_CONTENT.highlightQuote}
          </p>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#B08A33] font-sans font-semibold">
            <span>TRAJETÓRIA EXECUTIVA</span>
            <span aria-hidden="true">·</span>
            <span>SOLIDEZ & HISTÓRICO COMPROVADO</span>
          </div>
        </div>

        {/* Subsection: Trajetória Executiva - Organizações */}
        <div className="pt-10 border-t border-[#E5E3DC]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.22em] text-neutral-500 uppercase block mb-2">
                {EXPERIENCE_CONTENT.organizationsLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-medium text-[#0B0D0E] tracking-tight">
                {EXPERIENCE_CONTENT.organizationsTitle}
              </h3>
            </div>
            
            <span className="text-xs text-neutral-500 font-sans tracking-wider">
              10 corporações multinacionais e líderes setoriais
            </span>
          </div>

          {/* 10 Organizations Panel with Authentic Logos */}
          <div className="mt-8 bg-[#0B0D0E] p-5 sm:p-8 lg:p-10 rounded-[4px] border border-[#22252A] shadow-2xl">
            <CorporateBrandsPanel />
          </div>

          {/* Compliance Governance Disclaimer */}
          <div className="mt-10 text-xs text-neutral-500 font-sans leading-relaxed border-t border-[#E5E3DC] pt-5 flex items-start gap-2.5">
            <span className="font-semibold text-neutral-800 shrink-0">Nota Institucional:</span>
            <span className="font-light">
              {EXPERIENCE_CONTENT.disclaimer}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
