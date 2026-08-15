import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/content';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A1830] text-[#EEF1F8] border-t border-[#16294A] py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-serif font-bold text-base text-[#EEF1F8]">{PROFILE.name}</span>
            <span className="text-[#B8944F]">•</span>
            <span className="font-mono text-xs text-[#D4B876]">MAGE®</span>
          </div>
          <p className="font-sans text-xs text-[#EEF1F8]/70">
            Mentor de Executivos & Especialista em Gestão de PMEs. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center">
          <button
            id="btn-footer-scroll-top"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#16294A] hover:bg-[#203864] text-[#D4B876] flex items-center justify-center border border-[#16294A] hover:border-[#B8944F]/40 transition-colors cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
