import { motion } from 'motion/react';
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Factory,
  Compass,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { TIMELINE_MILESTONES, ABOUT_FULL_TEXT } from '../data/content';
import { ActiveView } from '../types';

interface AboutPageProps {
  onNavigate: (view: ActiveView) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'siderurgia':
        return <Factory className="w-5 h-5" />;
      case 'sociesc':
        return <GraduationCap className="w-5 h-5" />;
      case 'termotecnica':
        return <Briefcase className="w-5 h-5" />;
      case 'paex':
        return <Award className="w-5 h-5" />;
      case 'mage':
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full bg-[#F8F6F1] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Navigation & Header */}
        <div className="space-y-4">
          <button
            id="btn-about-back-top"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9C7A3C] hover:text-[#0E2040] font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold bg-[#EFE4C9]/70 px-3 py-1 rounded-md border border-[#E1DBC9]">
              TRAJETÓRIA EXECUTIVA & ORIGEM
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2040]">
              Quem sou eu?
            </h1>
            <p className="font-serif text-lg sm:text-xl text-[#0E2040]/80 italic pt-1">
              "Passei mais de 30 anos dentro da indústria brasileira antes de transformar essa vivência em método."
            </p>
          </div>
        </div>

        {/* Narrative Overview Card */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E1DBC9] shadow-sm space-y-5">
          <div className="border-l-2 border-[#B8944F] pl-4 sm:pl-5">
            <p className="font-serif text-lg sm:text-xl text-[#0E2040] font-semibold leading-relaxed">
              Da operação de chão de fábrica à mentoria estratégica de PMEs
            </p>
          </div>

          <div className="space-y-4 text-base text-[#1C2333] leading-relaxed font-sans font-normal">
            <p>
              Passei mais de 30 anos dentro da indústria brasileira antes de transformar essa vivência em método.
            </p>
            <p>
              Comecei treinando e desenvolvendo pessoas dentro de um grupo siderúrgico, por 17 anos, do chão de fábrica até o nível executivo. Foi ali que aprendi, na prática, o que separa uma operação amadora de uma madura.
            </p>
            <p>
              Por mais de 10 anos, atuei como gestor e dirigi a Escola Técnica Tupy, em Joinville. A Sociesc era a mantenedora da Escola Técnica Tupy e, a partir desse trabalho em conjunto, foi desenvolvida a instituição Sociesc como escola de ensino superior, que mais tarde veio a se consolidar como UniSociesc — centro universitário de referência com mais de 90 cursos entre formação técnica, graduação e pós-graduação. Também fui diretor industrial da Termotécnica, líder brasileira em embalagens de EPS (isopor) para as indústrias de linha branca e eletroeletrônicos, e dirigi o PAEX, um dos programas de formação executiva mais respeitados do Brasil, dentro da Fundação Dom Cabral.
            </p>
            <p className="pt-2 font-medium text-[#0E2040] bg-[#F8F6F1] p-4 rounded-lg border border-[#E1DBC9]">
              Hoje, sou consultor e mentor de médias empresas, além de atuar junto a organizações como Impact Hub, CDL e ACIF. Foi dessa trajetória, chão de fábrica, sala de aula, alta gestão corporativa e mentoria direta, que nasceu a <strong className="text-[#0E2040]">Metodologia MAGE® (Método de Avaliação e Gestão Empresarial)</strong>: um método que criei para ajudar donos de PME a saírem da gestão por instinto e construírem empresas maduras, organizadas e prontas para crescer.
            </p>
          </div>
        </div>

        {/* Signature Motif: Vertical Timeline (Linha Navy + Marcadores Dourados) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0E2040] font-bold bg-[#EFE4C9]/70 px-3 py-1 rounded border border-[#E1DBC9]">
              LINHA DO TEMPO EXECUTIVA
            </span>
            <div className="h-px flex-1 bg-[#E1DBC9]" />
          </div>

          {/* Timeline Container with Navy vertical line */}
          <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-[#0E2040]">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Gold Marker Node */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0E2040] border-2 border-[#B8944F] text-[#D4B876] flex items-center justify-center shadow-sm group-hover:bg-[#16294A] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#B8944F]" />
                </div>

                {/* Milestone Content Card */}
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E1DBC9] hover:border-[#B8944F] shadow-sm transition-all duration-200 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9C7A3C] font-bold bg-[#EFE4C9]/70 px-2 py-0.5 rounded">
                      {milestone.tag}
                    </span>
                    <span className="font-mono text-xs text-[#1C2333]/60">
                      {milestone.institution}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0E2040]">
                    {milestone.title}
                  </h3>

                  <div className="text-xs font-mono uppercase tracking-wider text-[#B8944F] font-semibold">
                    {milestone.role}
                  </div>

                  <p className="text-sm text-[#1C2333]/90 leading-relaxed font-sans">
                    {milestone.description}
                  </p>

                  {milestone.takeaway && (
                    <div className="pt-2 mt-2 border-t border-[#E1DBC9]/60 flex items-center gap-2 text-xs font-serif italic text-[#0E2040]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8944F] shrink-0" />
                      <span>{milestone.takeaway}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner to Methodology */}
        <div className="bg-[#0E2040] text-[#EEF1F8] rounded-xl p-6 sm:p-8 border border-[#16294A] shadow-md space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4B876] font-bold">
            DA VIVÊNCIA AO MÉTODO
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#EEF1F8]">
            Conheça a Metodologia MAGE® em detalhes
          </h3>
          <p className="text-sm sm:text-base text-[#EEF1F8]/90 font-sans leading-relaxed">
            Descubra como o ciclo dos 4 pilares (Medir, Analisar, Gerenciar, Evoluir) e o Diagnóstico Oficial de 100 itens estruturam a maturidade da sua empresa.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              id="btn-about-to-methodology"
              onClick={() => onNavigate('methodology')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#B8944F] hover:bg-[#9C7A3C] text-[#0A1830] font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
            >
              Explorar Metodologia MAGE®
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="btn-about-to-home"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#16294A] hover:bg-[#203864] text-[#EEF1F8] border border-[#16294A] font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Voltar ao Início
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
