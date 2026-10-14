import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyNoticeModal: React.FC<PrivacyNoticeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF9F6] border border-[#E5E3DC] max-w-lg w-full p-8 rounded-sm shadow-2xl relative text-neutral-900">
        
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-6 right-6 p-1 text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-neutral-800" />
          <span className="text-[10px] font-sans font-semibold tracking-widest text-neutral-500 uppercase">
            ESTRUTURA DE COMPLIANCE & LGPD
          </span>
        </div>

        <h3 id="privacy-modal-title" className="font-serif text-2xl font-medium text-[#111315] mb-4">
          Privacidade & Governança
        </h3>

        <div className="text-sm font-sans text-neutral-600 space-y-3 leading-relaxed mb-6">
          <p>
            A 8C Inve$t pauta todas as suas relações na mais rigorosa confidencialidade, ética e governança institucional.
          </p>
          <p className="text-xs text-neutral-500 p-3 bg-neutral-100 rounded-sm border border-neutral-200">
            <strong>Identificação Técnica:</strong> Conforme diretrizes institucionais, o repositório oficial de termos de privacidade e compliance regulatório está em processo de homologação pelo comitê jurídico da 8C Inve$t. Para solicitação de NDAs ou consultas sobre tratamento de dados, contate diretamente: <a href="mailto:contato@superin.com" className="underline font-medium text-neutral-900">contato@superin.com</a>.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111315] hover:bg-neutral-800 rounded-sm transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
