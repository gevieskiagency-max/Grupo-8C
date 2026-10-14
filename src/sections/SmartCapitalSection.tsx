import React from 'react';
import { SMART_CAPITAL_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import worldMapImage from '../assets/images/world_connections_map_1791436232769.jpg';
import { Mail } from 'lucide-react';

export const SmartCapitalSection: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-[#0B0D0E] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-6">
            
            {/* Visual Labels */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs tracking-wider">
              <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                {SMART_CAPITAL_CONTENT.label}
              </span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-[11px] font-sans text-neutral-400 uppercase tracking-[0.18em]">
                {SMART_CAPITAL_CONTENT.labels.markets}
              </span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-[11px] font-sans text-neutral-400 uppercase tracking-[0.18em]">
                {SMART_CAPITAL_CONTENT.labels.connections}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white leading-[1.08] tracking-tight mb-8 [text-wrap:balance]">
              {SMART_CAPITAL_CONTENT.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < SMART_CAPITAL_CONTENT.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light mb-12">
              {SMART_CAPITAL_CONTENT.description}
            </p>

            {/* Action and Email */}
            <div className="flex flex-wrap items-center gap-6">
              <CommercialCTA size="lg">
                {SMART_CAPITAL_CONTENT.cta}
              </CommercialCTA>

              <a
                href={`mailto:${SMART_CAPITAL_CONTENT.email}`}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.14em] font-medium text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SMART_CAPITAL_CONTENT.email}</span>
              </a>
            </div>

          </div>

          {/* Right Visual Element: Conexões Globais & Mapa Mundi */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[2px] overflow-hidden bg-neutral-950 border border-white/10 aspect-[16/10] shadow-2xl">
              <img
                src={worldMapImage}
                alt="Mapa Mundi Conexões 8C Invest - Conexões Globais e Mercados"
                className="w-full h-full object-cover object-center opacity-85 hover:opacity-100 transition-opacity duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-[#DFBD69] block mb-0.5">
                    {SMART_CAPITAL_CONTENT.visualsIdentified.map}
                  </span>
                  <span className="text-xs font-serif text-neutral-300">
                    {SMART_CAPITAL_CONTENT.visualsIdentified.globe}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-neutral-400 tracking-wider">
                  GLOBAL NETWORK
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
