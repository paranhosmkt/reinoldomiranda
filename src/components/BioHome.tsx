import { motion } from 'motion/react';
import {
  User,
  Compass,
  Instagram,
  ArrowRight,
  ExternalLink,
  Send,
  Sparkles,
} from 'lucide-react';
import { PROFILE } from '../data/content';
import { ActiveView } from '../types';

interface BioHomeProps {
  onNavigate: (view: ActiveView) => void;
}

export function BioHome({ onNavigate }: BioHomeProps) {
  return (
    <div className="w-full bg-[#F8F6F1] py-6 sm:py-9 px-4 sm:px-6">
      <div className="max-w-lg mx-auto space-y-3">
        
        {/* BOTÃO EM DESTAQUE: Participe da nossa 1° mentoria */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.15 }}
        >
          <a
            id="link-mentoria-primeira-turma"
            href={PROFILE.mentorshipFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between bg-white hover:bg-[#FFFFFF] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 border-2 border-[#B8944F] hover:border-[#9C7A3C] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#0E2040] text-[#D4B876] flex items-center justify-center shrink-0 border border-[#B8944F]/40 group-hover:bg-[#16294A] transition-colors">
                <Sparkles className="w-4 h-4 text-[#D4B876]" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-base sm:text-lg font-bold text-[#0E2040] group-hover:text-[#B8944F] transition-colors leading-tight">
                  Participe da nossa mentoria exclusiva
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#9C7A3C] font-semibold pt-0.5">
                  Máximo de 15 pessoas
                </span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#0E2040] text-[#D4B876] group-hover:bg-[#B8944F] group-hover:text-[#0E2040] flex items-center justify-center shrink-0 border border-[#B8944F] transition-all">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </motion.div>

        {/* BOTÃO 1: Quem sou eu? */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.15 }}
        >
          <button
            id="btn-nav-quem-sou-eu"
            onClick={() => onNavigate('about')}
            className="group w-full flex items-center justify-between bg-white hover:bg-[#FFFFFF] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 border border-[#E1DBC9] hover:border-[#B8944F] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#0E2040] text-[#D4B876] flex items-center justify-center shrink-0 border border-[#B8944F]/30 group-hover:bg-[#16294A] transition-colors">
                <User className="w-4 h-4" />
              </div>
              <span className="font-serif text-base sm:text-lg font-bold text-[#0E2040] group-hover:text-[#B8944F] transition-colors">
                Quem sou eu?
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#F8F6F1] group-hover:bg-[#0E2040] text-[#0E2040] group-hover:text-[#D4B876] flex items-center justify-center shrink-0 border border-[#E1DBC9] transition-all">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>
        </motion.div>

        {/* BOTÃO 2: A Metodologia MAGE */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.15 }}
        >
          <button
            id="btn-nav-metodologia-mage"
            onClick={() => onNavigate('methodology')}
            className="group w-full flex items-center justify-between bg-white hover:bg-[#FFFFFF] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 border border-[#E1DBC9] hover:border-[#B8944F] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#0E2040] text-[#D4B876] flex items-center justify-center shrink-0 border border-[#B8944F]/30 group-hover:bg-[#16294A] transition-colors">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif text-base sm:text-lg font-bold text-[#0E2040] group-hover:text-[#B8944F] transition-colors">
                A Metodologia MAGE
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#F8F6F1] group-hover:bg-[#0E2040] text-[#0E2040] group-hover:text-[#D4B876] flex items-center justify-center shrink-0 border border-[#E1DBC9] transition-all">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>
        </motion.div>

        {/* BOTÃO 3: Me siga no Instagram */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.15 }}
        >
          <a
            id="link-instagram-reinoldo"
            href={PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between bg-white hover:bg-[#FFFFFF] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 border border-[#E1DBC9] hover:border-[#B8944F] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="font-serif text-base sm:text-lg font-bold text-[#0E2040] group-hover:text-[#B8944F] transition-colors">
                Me siga no Instagram
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#F8F6F1] group-hover:bg-[#0E2040] text-[#0E2040] group-hover:text-[#D4B876] flex items-center justify-center shrink-0 border border-[#E1DBC9] transition-all">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </motion.div>

        {/* Canal direto WhatsApp / Contato Executivo */}
        <div className="pt-2">
          <a
            id="btn-falar-com-reinoldo"
            href={PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#0A1830] hover:bg-[#0E2040] text-[#D4B876] hover:text-[#EEF1F8] border border-[#B8944F]/40 hover:border-[#B8944F] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-xs cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#B8944F]" />
            Conversar no WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
