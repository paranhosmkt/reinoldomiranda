import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { PROFILE } from '../data/content';
import { ActiveView } from '../types';

interface HeaderHeroProps {
  currentView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

export function HeaderHero({ currentView, onNavigate }: HeaderHeroProps) {
  return (
    <header className="relative w-full overflow-hidden bg-[#0A1830] text-[#EEF1F8] border-b border-[#16294A] min-h-[500px] sm:min-h-[580px] flex flex-col justify-between">
      {/* Prominent Background Image with High Visibility & Contrast Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          key={PROFILE.heroImage}
          src={PROFILE.heroImage}
          alt={PROFILE.name}
          className="w-full h-full object-cover object-top sm:object-[center_20%] opacity-95 filter contrast-[1.03] brightness-[0.98] transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Soft dark vignette and bottom gradient to blend text smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1830]/40 via-transparent to-[#0A1830] 85%" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A1830] via-[#0A1830]/90 to-transparent" />
      </div>

      {/* Top Bar with Navigation */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pt-4 pb-2 flex items-center justify-between min-h-[44px]">
        {currentView !== 'home' ? (
          <button
            id="btn-back-to-home"
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#16294A]/90 hover:bg-[#16294A] border border-[#B8944F]/40 hover:border-[#B8944F] text-[#D4B876] text-sm transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">Voltar ao Início</span>
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* Main Hero Content positioned below the photo portrait */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pt-36 sm:pt-48 pb-8 sm:pb-10 text-center flex flex-col items-center">
        {/* Executive Identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2.5 max-w-2xl"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EEF1F8] drop-shadow-md">
            {PROFILE.name}
          </h1>

          <p className="text-base sm:text-lg text-[#D4B876] font-medium tracking-wide drop-shadow-sm">
            {PROFILE.title}
          </p>

          <p className="font-mono text-xs sm:text-sm text-[#EEF1F8]/90 tracking-wider uppercase font-semibold">
            {PROFILE.subtitle}
          </p>

          {currentView === 'home' && (
            <p className="text-sm sm:text-base text-[#EEF1F8] italic font-serif max-w-xl mx-auto pt-2 leading-relaxed drop-shadow-sm">
              "{PROFILE.headline}"
            </p>
          )}
        </motion.div>
      </div>
    </header>
  );
}
