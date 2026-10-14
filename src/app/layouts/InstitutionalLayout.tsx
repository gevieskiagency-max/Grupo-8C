import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalHeader } from '../../components/navigation/GlobalHeader';
import { GlobalFooter } from '../../components/layout/GlobalFooter';

interface InstitutionalLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const InstitutionalLayout: React.FC<InstitutionalLayoutProps> = ({
  children,
  showFooter = true,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#111315] flex flex-col font-sans selection:bg-[#DFBD69] selection:text-[#0B0D0E]">
      <GlobalHeader />
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {children}
      </main>
      {showFooter && <GlobalFooter />}
    </div>
  );
};
