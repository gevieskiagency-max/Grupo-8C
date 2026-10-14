import React from 'react';
import { ALLIANCE_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import hubsImage from '../assets/images/conexoes_globais_sob_luz_dourada.png';
import { Globe } from 'lucide-react';

export const GlobalAllianceSection: React.FC = () => {
  return (
    <section 
      id="alianca-global" 
      className="py-28 md:py-36 bg-[#0B0D0E] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Image Layer with Deep Navy / Black Gradient */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <img
          src={hubsImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/80 to-[#0B0D0E]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4 text-xs tracking-widest uppercase">
            <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
            <span className="text-[#DFBD69] font-sans font-semibold text-[11px] tracking-[0.24em]">
              {ALLIANCE_CONTENT.label}
            </span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-neutral-400 font-sans text-[11px] tracking-[0.18em]">
              {ALLIANCE_CONTENT.areaTag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium text-white tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
            {ALLIANCE_CONTENT.title}
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
            {ALLIANCE_CONTENT.description}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Services Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.22em] text-[#DFBD69] block mb-2">
                ESCOPO DE OPERAÇÃO
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight mb-8">
                {ALLIANCE_CONTENT.subtitle}
              </h3>

              {/* 2 Services Cards with Fine Gold Borders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ALLIANCE_CONTENT.services.map((service, idx) => (
                  <div 
                    key={service.title}
                    className="p-8 bg-neutral-900/60 border border-white/10 rounded-[2px] hover:border-[#DFBD69]/60 transition-colors group"
                  >
                    <span className="font-mono text-xs text-[#DFBD69] block mb-4">
                      [0{idx + 1}]
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-[#DFBD69] transition-colors">
                      {service.title}
                    </h4>
                    <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais da Aliança */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-6">
                {ALLIANCE_CONTENT.diferenciaisTitle}
              </h4>
              <ul className="space-y-4">
                {ALLIANCE_CONTENT.diferenciais.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69] mt-2.5 shrink-0" />
                    <span className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-10">
                <CommercialCTA size="lg">
                  {ALLIANCE_CONTENT.cta}
                </CommercialCTA>
              </div>
            </div>
          </div>

          {/* Right Image Vignette */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] lg:aspect-[3/4]">
              <img
                src={hubsImage}
                alt="Conexões Globais Sob Luz Dourada - 8C Inve$t & AZA Partners"
                className="w-full h-full object-cover object-right opacity-90 hover:opacity-100 transition-opacity duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/85 backdrop-blur-md border border-white/15 rounded-[2px]">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#DFBD69] font-sans font-semibold mb-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>REDE DE CAPITAL GLOBAL</span>
                </div>
                <div className="text-sm font-serif text-neutral-200">
                  M&A · Fundos Soberanos · Private Equity · Family Offices
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
