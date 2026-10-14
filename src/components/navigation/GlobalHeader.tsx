import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { NAV_LINKS } from '../../data/content';
import { CommercialCTA } from '../ui/CommercialCTA';
import { X } from 'lucide-react';

export const GlobalHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update header height dynamically to ensure mobile drawer aligns with zero gap
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [isScrolled, mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Accessibility: Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const isHome = location.pathname === '/';
  const isAza = location.pathname.startsWith('/atuacao/aza-partners');

  // Background styling
  const headerBgClass = isScrolled
    ? (isAza ? 'bg-[#0A192F]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' : 'bg-[#0B0D0E]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5')
    : (isHome ? 'bg-transparent border-b border-white/10 py-3.5 sm:py-4 lg:py-6' : 'bg-[#0B0D0E]/85 backdrop-blur-sm border-b border-white/10 py-3.5 sm:py-4 lg:py-5');

  return (
    <header 
      ref={headerRef} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark (Always single-line, non-breaking, preserved) */}
        <Link 
          to="/" 
          aria-label="8C Inve$t - Início" 
          onClick={() => setMobileMenuOpen(false)}
          className="shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFBD69] rounded-sm group transition-transform duration-200 hover:scale-[1.01]"
        >
          <Logo variant="dark" />
        </Link>

        {/* Zone 2: Navigation Links (Desktop ONLY: lg+) */}
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
                className={`py-1.5 relative transition-colors duration-200 ${
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

        {/* Zone 3: CTA (Desktop ONLY) & Hamburger Button (Mobile/Tablet) */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {/* Golden CTA: REMOVED from top bar on mobile/tablet, visible ONLY on desktop lg+ */}
          <CommercialCTA
            size="sm"
            iconType="arrow-up-right"
            className="hidden lg:inline-flex"
          >
            FALE COM A 8C
          </CommercialCTA>

          {/* Minimalist Luxury Hamburger Button (Mobile & Tablet) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-[6px] bg-[#14171A] border border-white/15 hover:border-[#DFBD69]/70 text-[#DFBD69] hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFBD69] active:scale-95"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#DFBD69]" />
            ) : (
              <div className="w-5 flex flex-col items-end justify-center gap-1.5 py-0.5" aria-hidden="true">
                <span className="w-5 h-[2px] bg-[#DFBD69] rounded-full" />
                <span className="w-3.5 h-[2px] bg-[#DFBD69] rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Overlay (Always positioned exactly under header) */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação mobile"
          style={{ top: `${headerHeight}px` }}
          className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-[#0B0D0E]/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto px-6 py-6 sm:py-8 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Navigation Links List */}
          <nav className="flex flex-col gap-1 text-sm font-sans tracking-wider text-neutral-300">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] flex items-center justify-between border-b border-white/5 py-3 transition-all text-sm uppercase tracking-[0.16em] ${
                    isActive 
                      ? 'text-[#DFBD69] font-semibold pl-2 bg-white/[0.02]' 
                      : 'hover:text-[#DFBD69] hover:pl-2 text-neutral-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD69]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Action Section with Golden CTA Button */}
          <div className="pt-8 mt-6 border-t border-white/10 space-y-4">
            <CommercialCTA
              size="lg"
              iconType="arrow-up-right"
              className="w-full justify-center min-h-[48px] shadow-[0_4px_24px_rgba(223,189,105,0.3)]"
            >
              FALE COM A 8C
            </CommercialCTA>

            <div className="text-center pt-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500 block">
                8C INVE$T · BUSINESS FOUND
              </span>
              <span className="text-[9px] font-sans text-neutral-600 tracking-wider uppercase mt-1 block">
                CAPITAL • ESTRATÉGIA • GOVERNANÇA • GESTÃO
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
