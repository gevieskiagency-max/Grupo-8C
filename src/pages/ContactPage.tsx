import React, { useState } from 'react';
import { InstitutionalLayout } from '../app/layouts/InstitutionalLayout';
import { PageHero } from '../components/layout/PageHero';
import { CONTACT_CONTENT, LEAD_FORM_URL } from '../data/content';
import { CommercialCTA } from '../components/ui/CommercialCTA';
import heroBackground from '../assets/images/hero_skyline_fita_dourada.jpg';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(LEAD_FORM_URL, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <InstitutionalLayout>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="CONTATO INSTITUCIONAL"
        badge="PRIVATE EXECUTIVE RELATIONS"
        title={
          <>
            A próxima fase da sua empresa <br />
            <span className="italic font-normal bg-gradient-to-r from-[#DFBD69] via-[#F3E3B6] to-[#C29B38] bg-clip-text text-transparent">
              começa com uma decisão.
            </span>
          </>
        }
        subtitle="Capital, estratégia, governança e gestão trabalhando juntos para construir empresas mais fortes e gerar valor."
        backgroundImage={heroBackground}
        imageAlt="8C Inve$t - Contato Institucional e Relações Executivas"
      />

      {/* 2. Direct Executive Contact Section */}
      <section className="py-24 md:py-36 bg-[#0B0D0E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Direct Institutional Text & CTA */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#DFBD69]" />
                <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#DFBD69] uppercase">
                  {CONTACT_CONTENT.label}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-medium text-white leading-[1.08] tracking-tight mb-8 [text-wrap:balance]">
                {CONTACT_CONTENT.title.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < CONTACT_CONTENT.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light mb-12 max-w-xl">
                {CONTACT_CONTENT.description}
              </p>

              {/* Direct Lead Form Action */}
              <div className="mb-14">
                <CommercialCTA size="lg" className="px-9 py-4">
                  {CONTACT_CONTENT.cta}
                </CommercialCTA>
                <div className="mt-4">
                  <a 
                    href={`mailto:${CONTACT_CONTENT.email}`}
                    className="font-sans text-xs text-neutral-400 hover:text-white underline underline-offset-4 tracking-[0.12em]"
                  >
                    {CONTACT_CONTENT.email}
                  </a>
                </div>
              </div>

              {/* Institutional Summary */}
              <div className="pt-8 border-t border-white/10 max-w-lg">
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed italic font-light">
                  {CONTACT_CONTENT.institutionalText}
                </p>
              </div>
            </div>

            {/* Right Column: Executive Message Terminal */}
            <div className="lg:col-span-6">
              <div className="bg-neutral-900/70 border border-white/10 p-8 sm:p-12 rounded-[2px] shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-[0.24em] text-[#DFBD69] uppercase font-semibold">
                    CANAL EXECUTIVO DIRETO
                  </span>
                  <Mail className="w-4 h-4 text-neutral-400" />
                </div>

                {formSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-[#DFBD69] mx-auto" />
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                      Formulário Oficial Aberto
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans max-w-sm mx-auto leading-relaxed font-light">
                      O formulário oficial de atendimento da 8C Inve$t foi aberto em uma nova aba para o preenchimento de suas informações.
                    </p>
                    <div className="pt-2 flex flex-col items-center gap-3">
                      <CommercialCTA size="sm">
                        Reabrir Formulário Oficial
                      </CommercialCTA>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="mt-2 text-xs text-neutral-400 hover:text-white underline tracking-widest uppercase font-semibold cursor-pointer"
                      >
                        Nova Consulta
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[11px] font-sans font-semibold tracking-[0.16em] text-neutral-400 uppercase mb-2">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Roberto Silva"
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-[2px] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#DFBD69] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans font-semibold tracking-[0.16em] text-neutral-400 uppercase mb-2">
                        Organização / Empresa
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ex: Grupo Industrial S.A."
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-[2px] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#DFBD69] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans font-semibold tracking-[0.16em] text-neutral-400 uppercase mb-2">
                        E-mail Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="roberto@empresa.com.br"
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-[2px] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#DFBD69] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans font-semibold tracking-[0.16em] text-neutral-400 uppercase mb-2">
                        Contexto Inicial / Desafio
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        placeholder="Descreva brevemente o momento da empresa (estruturação, expansão, capital)..."
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-[2px] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#DFBD69] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white bg-neutral-800 hover:bg-neutral-700 border border-white/15 transition-all rounded-[2px] flex items-center justify-center gap-2.5 hover:border-[#DFBD69]"
                    >
                      <span>Transmitir Consulta Executiva</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </InstitutionalLayout>
  );
};
