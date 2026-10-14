import React from 'react';
import { Link } from 'react-router-dom';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { ALLIANCE_CONTENT } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import hubsImage from '../assets/images/conexoes_globais_sob_luz_dourada.png';
import { Globe, ShieldCheck, Building2 } from 'lucide-react';

export const AzaPartnersPage: React.FC = () => {
  return (
    <InstitutionalLayout>
      {/* 1. Dedicated Page Hero with Deep Navy Theme */}
      <PageHero
        eyebrow="ALIANÇA GLOBAL ESTRATÉGICA"
        badge="8C INVE$T & AZA PARTNERS"
        theme="navy"
        title={
          <>
            8C Inve$t & AZA Partners <br />
            <span className="italic font-normal text-[#DFBD69]">
              M&A & Advisory Global
            </span>
          </>
        }
        subtitle="Conectando empresas a uma rede global de capital institucional, advisory em transações complexas e expansão internacional."
        backgroundImage={hubsImage}
        imageAlt="Aliança Global 8C Inve$t & AZA Partners - Conexões Globais Sob Luz Dourada"
        imagePosition="object-right lg:object-[82%_center]"
      />

      {/* 2. Strategic Operations Scope */}
      <section className="py-24 md:py-36 bg-[#0A192F] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Architectural Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src={hubsImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Scope & Services */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
                  <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                    ESCOPO DE OPERAÇÃO
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                  {ALLIANCE_CONTENT.subtitle}
                </h2>

                {/* 2 Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {ALLIANCE_CONTENT.services.map((service, idx) => (
                    <div 
                      key={service.title}
                      className="p-8 bg-[#0D2040]/80 border border-white/15 rounded-[2px] hover:border-[#DFBD69] transition-all group shadow-xl"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-semibold text-[#DFBD69]">
                          [0{idx + 1}]
                        </span>
                        {idx === 0 ? (
                          <Building2 className="w-5 h-5 text-neutral-400 group-hover:text-[#DFBD69] transition-colors" />
                        ) : (
                          <Globe className="w-5 h-5 text-neutral-400 group-hover:text-[#DFBD69] transition-colors" />
                        )}
                      </div>

                      <h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-[#DFBD69] transition-colors">
                        {service.title}
                      </h3>

                      <p className="font-sans text-sm text-neutral-300 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diferenciais da Aliança */}
              <div className="pt-10 border-t border-white/15">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-6">
                  {ALLIANCE_CONTENT.diferenciaisTitle}
                </h3>
                <ul className="space-y-4">
                  {ALLIANCE_CONTENT.diferenciais.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69] mt-2.5 shrink-0" />
                      <span className="font-sans text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Primary CTA Button */}
                <div className="mt-12">
                  <CommercialCTA size="lg" className="px-9 py-4">
                    {ALLIANCE_CONTENT.cta}
                  </CommercialCTA>
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Vignette & Global Alliance Identity */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] overflow-hidden border border-white/15 shadow-2xl bg-[#081528]">
                <img
                  src={hubsImage}
                  alt="Conexões Globais Sob Luz Dourada - 8C Inve$t & AZA Partners"
                  className="w-full h-72 sm:h-80 object-cover object-right opacity-95 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                <div className="p-8 sm:p-10 space-y-6">
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#DFBD69] font-sans font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ALIANÇA ESTRATÉGICA HOMOLOGADA</span>
                  </div>

                  <h4 className="font-serif text-2xl text-white font-medium">
                    Conexão Transfronteiriça com Grandes Fundos
                  </h4>

                  <p className="font-sans text-sm text-neutral-300 leading-relaxed font-light">
                    A união entre a capacidade de estruturação, governança e gestão da 8C Inve$t com a rede global de transações e M&A da AZA Partners gera liquidez, atratividade e valor de classe internacional para as companhias assessoradas.
                  </p>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>SÃO PAULO · MIAMI · LONDRES · ZURIQUE</span>
                    <span className="text-[#DFBD69]">GLOBAL REACH</span>
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
