import React, { useState } from 'react';
import { GLOBAL_BRANDS, PAINEL_CORPORATIVO_IMAGE, BrandItem } from '../../data/brands';
import { Maximize2, X, Shield, Sparkles } from 'lucide-react';

interface CorporateBrandsPanelProps {
  variant?: 'dark' | 'luxury-card';
  showPanelToggle?: boolean;
}

export const CorporateBrandsPanel: React.FC<CorporateBrandsPanelProps> = ({
  variant = 'dark',
  showPanelToggle = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'cards' | 'panel'>('cards');

  return (
    <div className="w-full">
      {/* Controls / View Mode Switcher */}
      {showPanelToggle && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200/60 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#DFBD69]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#DFBD69] uppercase">
              Painel Corporativo de Marcas Globais
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('cards')}
              className={`px-3.5 py-1.5 text-xs font-sans font-medium rounded transition-all ${
                activeTab === 'cards'
                  ? 'bg-[#181B1F] text-white border border-[#DFBD69]/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              Cards Individuais Interativos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('panel')}
              className={`px-3.5 py-1.5 text-xs font-sans font-medium rounded transition-all ${
                activeTab === 'panel'
                  ? 'bg-[#181B1F] text-white border border-[#DFBD69]/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              Painel Integrado Oficial
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800/60 rounded transition-colors ml-1"
              title="Expandir Painel em Tela Cheia"
              aria-label="Expandir Painel Corporativo de Marcas Globais"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 1: Interactive Cards with Authentic Original Logos */}
      {activeTab === 'cards' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {GLOBAL_BRANDS.map((brand: BrandItem) => (
            <div
              key={brand.id}
              className="group relative bg-[#0D0F12] border border-[#22252A] hover:border-[#DFBD69]/70 rounded-[3px] p-5 sm:p-6 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_30px_rgba(223,189,105,0.08)] hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Subtle Ambient Gold Glow on Hover */}
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-[#DFBD69]/0 group-hover:bg-[#DFBD69]/10 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

              {/* Category / Sector Header */}
              <div className="relative z-10">
                <span className="text-[9.5px] sm:text-[10px] uppercase font-sans font-medium tracking-[0.18em] text-neutral-400 block line-clamp-1 group-hover:text-[#DFBD69] transition-colors">
                  {brand.sector}
                </span>
              </div>

              {/* Central Official Unaltered Logo */}
              <div className="relative z-10 my-4 sm:my-5 flex items-center justify-center min-h-[58px] sm:min-h-[68px] px-1">
                <img
                  src={brand.logo}
                  alt={`Logo oficial ${brand.name}`}
                  className={`${brand.logoHeightClass || 'h-10 sm:h-12'} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm select-none`}
                  loading="lazy"
                />
              </div>

              {/* Bottom Tag / Strategic Note */}
              <div className="relative z-10 pt-3 border-t border-[#22252A] group-hover:border-[#DFBD69]/30 transition-colors flex items-center justify-between">
                <span className="text-[10.5px] sm:text-[11px] font-sans text-neutral-400 font-light group-hover:text-neutral-200 transition-colors">
                  {brand.note}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-[#DFBD69] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: Integrated Corporate Panel Image */}
      {activeTab === 'panel' && (
        <div className="relative bg-[#0B0D0E] border border-[#22252A] rounded-[4px] p-3 sm:p-5 shadow-2xl overflow-hidden">
          <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img
              src={PAINEL_CORPORATIVO_IMAGE}
              alt="Painel Corporativo de Marcas Globais - Trajetória Executiva"
              className="w-full h-auto object-contain rounded-[2px] transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-sans font-medium backdrop-blur-[2px]">
              <Maximize2 size={18} className="text-[#DFBD69]" />
              <span>Clique para ampliar em alta resolução</span>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-neutral-400 font-sans">
            Painel Corporativo de Marcas Globais — Trajetória Executiva Pregressa dos Sócios Fundadores
          </p>
        </div>
      )}

      {/* Fullscreen Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-[#0D0F12] border border-[#DFBD69]/40 rounded-lg p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#22252A]">
              <div className="flex items-center gap-3">
                <Shield className="text-[#DFBD69]" size={20} />
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white tracking-tight">
                  Painel Corporativo de Marcas Globais
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-auto max-h-[75vh] flex items-center justify-center p-2 bg-[#090A0C] rounded border border-neutral-800">
              <img
                src={PAINEL_CORPORATIVO_IMAGE}
                alt="Painel Corporativo de Marcas Globais em Alta Resolução"
                className="w-full h-auto object-contain select-none"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 gap-2">
              <span>Logos oficiais originais preservadas sem alteração gráfica.</span>
              <span className="text-neutral-500">Trajetória Executiva Pregressa · Governança 8C Inve$t</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
