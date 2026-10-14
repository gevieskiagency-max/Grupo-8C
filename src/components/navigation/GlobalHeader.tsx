import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { NAV_LINKS } from '../../data/content';
import { CommercialCTA } from '../ui/CommercialCTA';
import { Menu, X } from 'lucide-react';

export const GlobalHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isAza = location.pathname.startsWith('/atuacao/aza-partners');

  // Background styling
  const headerBgClass = isScrolled
    ? (isAza ? 'bg-[#0A192F]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' : 'bg-[#0B0D0E]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5')
    : (isHome ? 'bg-transparent border-b border-white/10 py-5 sm:py-6' : 'bg-[#0B0D0E]/80 backdrop-blur-sm border-b border-white/10 py-4 sm:py-5');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark */}
        <Link 
          to="/" 
          aria-label="8C Inve$t - Início" 
          className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFBD69] rounded-sm group transition-transform duration-200 hover:scale-[1.01]"
        >
          <Logo variant="dark" />
        </Link>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav 
          aria-label="Navegação principal" 
          className="hidden lg:flex items-center gap-7 xl:gap-8 text-[12.5px] font-sans font-medium tracking-[0.08em] text-neutral-300"
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`py-1 relative transition-colors duration-200 ${
                  isActive ? 'text-white font-semibold' : 'hover:text-white text-neutral-300'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#DFBD69] after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: CTA & Mobile Hamburger */}
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

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D0E]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4 text-sm font-sans tracking-wider text-neutral-300">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2 border-b border-white/5 transition-all ${
                    isActive ? 'text-[#DFBD69] font-semibold pl-2' : 'hover:text-[#DFBD69] hover:pl-2'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
