import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_CONTENT } from '../../data/content';
import { Logo } from '../Logo';
import { CommercialCTA } from '../ui/CommercialCTA';
import { PrivacyNoticeModal } from '../PrivacyNoticeModal';
import { ArrowUp } from 'lucide-react';

export const GlobalFooter: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0B0D0E] text-white pt-24 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Inquiries */}
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" aria-label="8C Inve$t - Início">
              <Logo variant="dark" />
            </Link>

            <div className="pt-4 max-w-md">
              <p className="font-sans text-xs text-neutral-400 mb-2 font-light">
                {FOOTER_CONTENT.inquiriesText}
              </p>
              <a
                href={`mailto:${FOOTER_CONTENT.email}`}
                className="font-serif text-lg text-white hover:text-[#DFBD69] transition-colors underline underline-offset-4"
              >
                {FOOTER_CONTENT.email}
              </a>
            </div>

            <div className="pt-2">
              <CommercialCTA size="sm">
                FALE COM A 8C INVEST
              </CommercialCTA>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.24em] text-neutral-400 block mb-6">
              {FOOTER_CONTENT.navTitle}
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-sans text-neutral-400 font-light">
              {FOOTER_CONTENT.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-[#DFBD69] transition-colors block py-0.5 tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Return to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-[#DFBD69] transition-colors p-2 -mr-2 cursor-pointer"
              aria-label="Retornar ao início da página"
            >
              <span>{FOOTER_CONTENT.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-6 lg:mt-0">
              PRIVATE CAPITAL · MULTI-EXPERIENCE
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500 font-light">
          <p className="text-center sm:text-left">
            {FOOTER_CONTENT.copyright}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-neutral-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              {FOOTER_CONTENT.privacyLink}
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <a
              href={`mailto:${FOOTER_CONTENT.email}`}
              className="hover:text-neutral-300 transition-colors"
            >
              {FOOTER_CONTENT.email}
            </a>
          </div>
        </div>

      </div>

      <PrivacyNoticeModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </footer>
  );
};
