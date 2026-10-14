import React from 'react';
import { Link } from 'react-router-dom';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { PILLARS_CONTENT, SMART_CAPITAL_CONTENT, ALLIANCE_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import pavilionImg from '../assets/images/pavilhao_moderno_ao_por_do_sol.png';
import worldMapImage from '../assets/images/world_connections_map_1791436232769.jpg';
import azaPanelImage from '../assets/images/conexoes_globais_sob_luz_dourada.png';
import { ArrowUpRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <InstitutionalLayout>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ATUAÇÃO 360°"
        badge="STRATEGIC CAPITAL"
        title={
          <>
            Os quatro pilares para a <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              estruturação e criação de valor.
            </span>
          </>
        }
        subtitle="Integrando capital, estratégia, governança e gestão para transformar desafios empresariais em oportunidades concretas de crescimento e sustentabilidade."
        backgroundImage={pavilionImg}
        imageAlt="8C Inve$t - Pavilhão moderno ao pôr do sol"
        imagePosition="object-right lg:object-[82%_center]"
      />

      {/* 2. Os Quatro Pilares - Editorial Presentation */}
      <section className="py-24 md:py-36 bg-[#F9F8F5] border-b border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-neutral-500 uppercase">
                {PILLARS_CONTENT.label}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-[#0B0D0E] tracking-tight">
              {PILLARS_CONTENT.title}
            </h2>
          </div>

          {/* 4 Pillars Grid with Hairline Dividers & Gold Accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E3DC] border border-[#E5E3DC] rounded-[2px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {PILLARS_CONTENT.items.map((item, idx) => (
              <div 
                key={item.pilar}
                className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between group transition-colors hover:bg-[#FAF9F6]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <span className="font-mono text-xs font-semibold text-[#DFBD69]">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-[#DFBD69] transition-colors" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B0D0E] tracking-tight mb-2 group-hover:text-neutral-700 transition-colors">
                    {item.pilar}
                  </h3>

                  <p className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#B08A33] mb-6">
                    {item.sub}
                  </p>
                </div>

                <p className="font-sans text-sm text-neutral-600 leading-relaxed pt-6 border-t border-neutral-100 font-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Featured Gateway to AZA Partners Global Alliance */}
      <section className="py-20 md:py-28 bg-[#0B0D0E] text-white border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[2px] border border-white/15 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 shadow-2xl group">
            {/* Background Image with Cinematic Luxury Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src={azaPanelImage}
                alt="Conexões Globais Sob Luz Dourada - 8C Inve$t & AZA Partners"
                className="w-full h-full object-cover object-right scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Refined Institutional Overlays: dark gradient focused behind typography, allowing the golden glowing globe and orbital routes to shine brilliantly */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#071322]/70 md:via-[#071322]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
              <div className="absolute inset-0 border border-[#DFBD69]/40 pointer-events-none" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
                <span className="text-[10.5px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                  {ALLIANCE_CONTENT.label}
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-[10px] font-sans text-neutral-300 uppercase tracking-widest">
                  {ALLIANCE_CONTENT.areaTag}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-tight mb-5 [text-wrap:balance]">
                {ALLIANCE_CONTENT.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                {ALLIANCE_CONTENT.description}
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <Link
                to="/atuacao/aza-partners"
                className="inline-flex items-center justify-center w-full lg:w-auto gap-3 px-8 py-4 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#0B0D0E] bg-gradient-to-r from-[#DFBD69] via-[#E8CD82] to-[#C29B38] hover:from-[#ebd59b] hover:to-[#d4ae48] transition-all rounded-[2px] shadow-[0_4px_25px_rgba(223,189,105,0.3)] hover:shadow-[0_4px_30px_rgba(223,189,105,0.45)] group/btn min-h-[48px]"
              >
                <span>ACESSAR ALIANÇA AZA PARTNERS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capital Inteligente e Conexões Globais (Incorporated into Atuação 360°) */}
      <section className="py-24 md:py-36 bg-[#111315] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
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

              <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white leading-[1.08] tracking-tight mb-8 [text-wrap:balance]">
                {SMART_CAPITAL_CONTENT.title.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < SMART_CAPITAL_CONTENT.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light mb-12">
                {SMART_CAPITAL_CONTENT.description}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <CommercialCTA size="lg">
                  {SMART_CAPITAL_CONTENT.cta}
                </CommercialCTA>

                <a
                  href={`mailto:${SMART_CAPITAL_CONTENT.email}`}
                  className="font-sans text-xs uppercase tracking-[0.14em] font-medium text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  {SMART_CAPITAL_CONTENT.email}
                </a>
              </div>
            </div>

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
    </InstitutionalLayout>
  );
};
