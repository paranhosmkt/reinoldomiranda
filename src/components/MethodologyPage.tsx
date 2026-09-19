import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  FileSpreadsheet,
  Target,
  Award,
  Sparkles,
  BarChart3,
  TrendingUp,
  Activity,
  ClipboardList,
  ShieldAlert,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { MAGE_METHODOLOGY, PROFILE } from '../data/content';
import { ActiveView } from '../types';

interface MethodologyPageProps {
  onNavigate: (view: ActiveView) => void;
}

export function MethodologyPage({ onNavigate }: MethodologyPageProps) {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  return (
    <div className="w-full bg-[#F8F6F1] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Navigation & Title Header */}
        <div className="space-y-4">
          <button
            id="btn-methodology-back-top"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9C7A3C] hover:text-[#0E2040] font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold bg-[#EFE4C9]/70 px-3 py-1 rounded-md border border-[#E1DBC9]">
                METODOLOGIA OFICIAL
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0E2040] bg-[#EFE4C9]/40 px-3 py-1 rounded-md border border-[#E1DBC9]">
                MAGE®
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2040]">
              A Metodologia MAGE®
            </h1>
            <p className="font-serif text-lg sm:text-xl text-[#0E2040]/80 italic pt-1">
              O Que É e Como Funciona
            </p>
            <p className="text-sm text-[#1C2333]/70 font-sans">
              Síntese dos dois materiais compartilhados (visão geral + estrutura da versão profissional), organizada num só lugar.
            </p>
          </div>
        </div>

        {/* Section 1: O Que É */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E1DBC9] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9C7A3C] font-bold">
            <BookOpen className="w-4 h-4 text-[#B8944F]" />
            <span>O QUE É</span>
          </div>

          <h2 className="font-serif text-2xl font-bold text-[#0E2040]">
            Método de Avaliação e Gestão Empresarial
          </h2>

          <p className="text-base text-[#1C2333] leading-relaxed font-sans">
            {MAGE_METHODOLOGY.overview}
          </p>

          <div className="bg-[#F8F6F1] p-4 sm:p-5 rounded-lg border border-[#E1DBC9] space-y-2">
            <div className="font-mono text-xs text-[#9C7A3C] uppercase tracking-wider font-semibold">
              SUBTÍTULO OFICIAL
            </div>
            <div className="font-serif text-lg font-bold text-[#0E2040]">
              "{MAGE_METHODOLOGY.subtitle}"
            </div>
            <div className="pt-2 text-sm text-[#1C2333]/90 font-sans border-t border-[#E1DBC9]/60">
              <strong className="text-[#0E2040]">Propósito declarado:</strong> {MAGE_METHODOLOGY.purpose}
            </div>
          </div>
        </div>

        {/* Section 2: Fundamentos e Filosofia (5 Princípios) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-bold bg-[#EFE4C9]/70 px-3 py-1 rounded border border-[#E1DBC9]">
              FUNDAMENTOS E FILOSOFIA
            </span>
            <span className="font-mono text-xs text-[#0E2040] font-semibold">
              5 PRINCÍPIOS CONCEITUAIS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MAGE_METHODOLOGY.principles.map((principle) => (
              <div
                key={principle.number}
                className="bg-white rounded-xl p-5 border border-[#E1DBC9] shadow-sm space-y-2 hover:border-[#B8944F] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#B8944F] bg-[#EFE4C9]/50 px-2 py-0.5 rounded">
                    {principle.number}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#9C7A3C]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#0E2040]">
                  {principle.title}
                </h3>
                <p className="text-xs text-[#1C2333]/80 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
            
            {/* Summary highlight card */}
            <div className="bg-[#0E2040] text-[#EEF1F8] rounded-xl p-5 border border-[#16294A] flex flex-col justify-center space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4B876]">
                DIRETRIZ CENTRAL
              </span>
              <p className="font-serif text-sm italic text-[#EEF1F8] leading-snug">
                "Substituir o instinto pela evidência factual em todos os níveis da liderança."
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: A Arquitetura — O Ciclo MAGE® (Os 4 Pilares) */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E1DBC9] shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-bold">
              A ARQUITETURA DO MÉTODO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E2040]">
              O Ciclo MAGE® — 4 Pilares
            </h2>
            <p className="text-sm text-[#1C2333]/80 font-sans">
              O nome MAGE vem de um ciclo contínuo de 4 etapas estruturadas com objetivos, ferramentas, entregáveis e indicadores:
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-4 gap-2">
            {MAGE_METHODOLOGY.pillars.map((pillar, idx) => (
              <button
                key={pillar.letter}
                onClick={() => setSelectedPillar(idx)}
                className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                  selectedPillar === idx
                    ? 'bg-[#0E2040] border-[#0E2040] text-[#EEF1F8] shadow-sm'
                    : 'bg-[#F8F6F1] border-[#E1DBC9] text-[#0E2040] hover:bg-[#EFE4C9]/40'
                }`}
              >
                <span className={`font-mono text-xl sm:text-2xl font-bold block ${selectedPillar === idx ? 'text-[#D4B876]' : 'text-[#0E2040]'}`}>
                  {pillar.letter}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold block mt-0.5">
                  {pillar.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          {(() => {
            const pillar = MAGE_METHODOLOGY.pillars[selectedPillar];
            return (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F8F6F1] rounded-xl p-5 sm:p-6 border border-[#E1DBC9] space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E1DBC9] pb-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9C7A3C] font-bold">
                      PILAR {selectedPillar + 1} DE 4
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0E2040]">
                      {pillar.letter} — {pillar.name}
                    </h3>
                  </div>
                  <span className="font-serif italic text-sm text-[#0E2040] bg-white px-3 py-1 rounded-full border border-[#E1DBC9]">
                    "{pillar.tagline}"
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0E2040] font-bold block mb-1">
                      Objetivo
                    </span>
                    <p className="text-[#1C2333]/90 font-sans">{pillar.objective}</p>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0E2040] font-bold block mb-1">
                      Ferramentas & Instrumentos
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tools.map((tool, i) => (
                        <span key={i} className="font-mono text-xs bg-white text-[#1C2333] px-2.5 py-1 rounded border border-[#E1DBC9]">
                          • {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-[#E1DBC9]">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#9C7A3C] font-bold block">
                        Entregável
                      </span>
                      <p className="font-sans text-xs text-[#1C2333] font-medium mt-0.5">
                        {pillar.deliverables}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#E1DBC9]">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#9C7A3C] font-bold block">
                        Indicadores de Sucesso
                      </span>
                      <p className="font-sans text-xs text-[#1C2333] font-medium mt-0.5">
                        {pillar.indicators}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

        {/* Section 4: As 10 Áreas Avaliadas */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E1DBC9] shadow-sm space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-bold">
                AUDITORIA DE MATURIDADE
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0E2040]">
                As 10 Áreas Avaliadas
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-[#0E2040] bg-[#EFE4C9]/70 px-3 py-1 rounded border border-[#E1DBC9]">
              10 DIMENSÕES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MAGE_METHODOLOGY.tenAreas.map((area) => (
              <div
                key={area.id}
                className="p-3.5 rounded-lg border border-[#E1DBC9] bg-[#F8F6F1] hover:bg-[#FFFFFF] hover:border-[#B8944F] transition-all space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#B8944F] bg-white px-2 py-0.5 rounded border border-[#E1DBC9]">
                    {String(area.id).padStart(2, '0')}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#0E2040]">
                    {area.name}
                  </h4>
                </div>
                <p className="text-xs text-[#1C2333]/80 font-sans pl-7">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 & 6: Diagnóstico Oficial + Plano de Transformação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Diagnóstico Oficial */}
          <div className="bg-white rounded-xl p-6 border border-[#E1DBC9] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-bold bg-[#EFE4C9]/70 px-2.5 py-0.5 rounded border border-[#E1DBC9]">
                {MAGE_METHODOLOGY.officialDiagnosis.tag}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0E2040]">
                {MAGE_METHODOLOGY.officialDiagnosis.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C2333]/90 font-sans leading-relaxed">
                {MAGE_METHODOLOGY.officialDiagnosis.description}
              </p>
              <div className="space-y-2 pt-2 border-t border-[#E1DBC9]/60">
                {MAGE_METHODOLOGY.officialDiagnosis.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#1C2333]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8944F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plano de Transformação */}
          <div className="bg-white rounded-xl p-6 border border-[#E1DBC9] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-bold bg-[#EFE4C9]/70 px-2.5 py-0.5 rounded border border-[#E1DBC9]">
                {MAGE_METHODOLOGY.transformationPlan.tag}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0E2040]">
                {MAGE_METHODOLOGY.transformationPlan.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C2333]/90 font-sans leading-relaxed">
                {MAGE_METHODOLOGY.transformationPlan.description}
              </p>
              <div className="space-y-2 pt-2 border-t border-[#E1DBC9]/60">
                {MAGE_METHODOLOGY.transformationPlan.tools.map((tool, i) => (
                  <div key={i} className="bg-[#F8F6F1] p-2 rounded border border-[#E1DBC9] flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#0E2040]">{tool.name}</span>
                    <span className="text-[#1C2333]/70 font-sans">{tool.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Section 7: IA na Metodologia */}
        <div className="bg-[#0A1830] text-[#EEF1F8] rounded-xl p-6 sm:p-8 border border-[#16294A] shadow-md space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#B8944F]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4B876] font-bold">
                {MAGE_METHODOLOGY.aiIntegration.tag}
              </span>
            </div>
            <span className="font-mono text-xs text-[#D4B876] bg-[#16294A] px-2.5 py-1 rounded border border-[#B8944F]/30">
              CAPÍTULO EXCLUSIVO
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#EEF1F8]">
            {MAGE_METHODOLOGY.aiIntegration.title}
          </h3>

          <p className="text-sm text-[#EEF1F8]/85 font-sans leading-relaxed">
            {MAGE_METHODOLOGY.aiIntegration.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {MAGE_METHODOLOGY.aiIntegration.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-[#0E2040] p-3.5 rounded-lg border border-[#16294A] space-y-1"
              >
                <div className="font-mono text-xs font-bold text-[#D4B876] uppercase tracking-wider">
                  {cap.title}
                </div>
                <p className="text-xs text-[#EEF1F8]/75 font-sans leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Certificação MAGE® */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E1DBC9] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9C7A3C] font-bold">
            <Award className="w-5 h-5 text-[#B8944F]" />
            <span>{MAGE_METHODOLOGY.certification.tag}</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#0E2040]">
            {MAGE_METHODOLOGY.certification.title}
          </h3>

          <p className="text-sm text-[#1C2333] leading-relaxed font-sans">
            {MAGE_METHODOLOGY.certification.description}
          </p>
        </div>

        {/* Bottom CTA to Contact / Instagram / Home */}
        <div className="bg-[#0E2040] text-[#EEF1F8] rounded-xl p-6 sm:p-8 border border-[#16294A] shadow-md text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#EEF1F8]">
            Pronto para aplicar a Metodologia MAGE® na sua empresa?
          </h3>
          <p className="text-sm text-[#EEF1F8]/85 max-w-xl mx-auto font-sans leading-relaxed">
            Elimine o achismo e a gestão por instinto. Agende um diagnóstico inicial com Reinoldo Miranda.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              id="btn-methodology-mentoria"
              href={PROFILE.mentorshipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#B8944F] hover:bg-[#9C7A3C] text-[#0A1830] font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer shadow-sm"
            >
              Participe da nossa mentoria exclusiva
            </a>
            <a
              id="btn-methodology-diagnostico"
              href="https://wa.me/554892106224?text=Ol%C3%A1%20Reinoldo,%20conheci%20a%20Metodologia%20MAGE%C2%AE%20e%20gostaria%20de%20conversar%20sobre%20o%20Diagn%C3%B3stico%20Oficial."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#16294A] hover:bg-[#203864] text-[#EEF1F8] border border-[#B8944F]/40 font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Conversar no WhatsApp
            </a>
            <button
              id="btn-methodology-to-home"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-[#16294A] text-[#EEF1F8]/80 hover:text-white border border-[#16294A] font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Voltar ao Início
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
