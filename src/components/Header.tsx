import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../data/content';
import { CommercialCTA } from './ui/CommercialCTA';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0D0E]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5' 
          : 'bg-transparent border-b border-white/10 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#inicio" 
          aria-label="8C Inve$t - Início" 
          className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFBD69] rounded-sm group transition-transform duration-200 hover:scale-[1.01]"
        >
          <Logo variant="dark" />
        </a>

        {/* Zone 2: Luxury Navigation Links (Desktop) */}
        <nav 
          aria-label="Navegação principal" 
          className="hidden lg:flex items-center gap-8 text-[12.5px] font-sans font-medium tracking-[0.08em] text-neutral-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBD69] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Institutional Contact CTA & Mobile Trigger */}
        <div className="flex items-center gap-5">
          <CommercialCTA
            size="sm"
            iconType="arrow-up-right"
            className="hidden sm:inline-flex"
          >
            FALE COM A 8C
          </CommercialCTA>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden p-2 text-neutral-200 hover:text-white hover:bg-white/10 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFBD69]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#0B0D0E]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-5 text-sm font-sans tracking-wider text-neutral-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2 border-b border-white/5 hover:text-[#DFBD69] hover:pl-2 transition-all"
              >
                {link.label}
              </a>
            ))}
            <CommercialCTA
              size="md"
              iconType="arrow-up-right"
              className="mt-4 w-full"
            >
              FALE COM A 8C
            </CommercialCTA>
          </nav>
        </div>
      )}
    </header>
  );
};
