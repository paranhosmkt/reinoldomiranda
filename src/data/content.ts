import { TimelineMilestone, MagePillar, MagePrinciple, MageArea } from '../types';

export const PROFILE = {
  name: 'Reinoldo Miranda',
  title: 'Mentor de Executivos & Médias Empresas',
  subtitle: 'Criador da Metodologia MAGE®',
  headline: 'Passei mais de 30 anos dentro da indústria brasileira antes de transformar essa vivência em método.',
  location: 'Brasil',
  instagram: 'reinoldomiranda',
  instagramUrl: 'https://instagram.com/reinoldomiranda',
  whatsappNumber: '554892106224',
  whatsappDisplay: '+55 48 9210-6224',
  whatsappUrl: 'https://wa.me/554892106224?text=Ol%C3%A1%20Reinoldo,%20conheci%20seu%20perfil%20e%20gostaria%20de%20saber%20mais%20sobre%20sua%20Mentoria%20Executiva%20e%20a%20Metodologia%20MAGE%C2%AE.',
  heroImage: 'https://i.ibb.co/Tq0MkhKz/Gemini-Generated-Image-lz0zp7lz0zp7lz0z.jpg',
  stats: [
    { label: 'EXPERIÊNCIA INDUSTRIAL', value: '+30 ANOS' },
    { label: 'SIDERURGIA & OPERAÇÕES', value: '17 ANOS' },
  ],
};

export const ABOUT_FULL_TEXT = `Passei mais de 30 anos dentro da indústria brasileira antes de transformar essa vivência em método.

Comecei treinando e desenvolvendo pessoas dentro de um grupo siderúrgico, por 17 anos, do chão de fábrica até o nível executivo. Foi ali que aprendi, na prática, o que separa uma operação amadora de uma madura.

Por mais de 10 anos, dirigi a Escola Técnica Tupy, em Joinville, e foi dessa direção que nasceu a Sociesc, hoje UniSociesc, centro universitário com mais de 90 cursos entre formação técnica, graduação e pós-graduação. Também fui diretor industrial da Termotécnica, líder brasileira em embalagens de EPS (isopor) para as indústrias de linha branca e eletroeletrônicos, e dirigi o PAEX, um dos programas de formação executiva mais respeitados do Brasil, dentro da Fundação Dom Cabral.

Hoje, sou consultor e mentor de médias empresas, além de atuar junto a organizações como Impact Hub, CDL e ACIF. Foi dessa trajetória, chão de fábrica, sala de aula, alta gestão corporativa e mentoria direta, que nasceu a Metodologia MAGE® (Método de Avaliação e Gestão Empresarial): um método que criei para ajudar donos de PME a saírem da gestão por instinto e construírem empresas maduras, organizadas e prontas para crescer.`;

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'siderurgia',
    tag: '17 ANOS DE ATUAÇÃO',
    title: 'Do chão de fábrica à alta liderança',
    role: 'Treinamento, Desenvolvimento & Gestão de Pessoas',
    institution: 'Grupo Siderúrgico Nacional',
    description:
      'Início da carreira treinando e desenvolvendo equipes do operacional ao corpo executivo. Foi onde compreendi, na prática e na rotina diária da indústria pesada, a linha exata que separa uma operação amadora de uma empresa madura.',
    takeaway: 'O que separa uma operação amadora de uma madura',
  },
  {
    id: 'sociesc',
    tag: '+10 ANOS DE DIREÇÃO',
    title: 'Da Escola Técnica Tupy à Fundação da Sociesc',
    role: 'Diretor Geral & Educador Executivo',
    institution: 'Escola Técnica Tupy / Sociesc (hoje UniSociesc)',
    description:
      'Mais de uma década na direção da renomada Escola Técnica Tupy em Joinville. Sob essa liderança nasceu a Sociesc (hoje UniSociesc), consolidando um centro universitário de referência com mais de 90 cursos de formação técnica, graduação e pós-graduação.',
    takeaway: 'Estruturação pedagógica, rigor formativo e governança',
  },
  {
    id: 'termotecnica',
    tag: 'LIDERANÇA INDUSTRIAL',
    title: 'Direção Industrial e Escala Nacional',
    role: 'Diretor Industrial',
    institution: 'Termotécnica',
    description:
      'Liderança das operações industriais na líder brasileira em embalagens de EPS para os maiores players mundiais dos setores de linha branca e eletroeletrônicos. Excelência em processos, cadeias de suprimentos e produtividade.',
    takeaway: 'Gestão por indicadores, qualidade total e escala',
  },
  {
    id: 'paex',
    tag: 'FORMAÇÃO EXECUTIVA DE ELITE',
    title: 'Direção do PAEX na Fundação Dom Cabral',
    role: 'Diretor do Programa PAEX',
    institution: 'Fundação Dom Cabral (FDC)',
    description:
      'Direção do PAEX (Parceiros para a Excelência), um dos programas de desenvolvimento executivo e empresarial mais prestigiados e rigorosos da América Latina.',
    takeaway: 'Alta estratégia corporativa e estruturação de boards',
  },
  {
    id: 'mage',
    tag: 'PRESENTE • IMPACTO & MÉTODO',
    title: 'Consultoria, Mentoria Executiva e Nascimento do MAGE®',
    role: 'Mentor de Executivos & Criador da Metodologia MAGE®',
    institution: 'Impact Hub • CDL • ACIF • Empresas Mentoradas',
    description:
      'Atuação como consultor e mentor de médias empresas e ecossistemas de negócios. Da união entre chão de fábrica, sala de aula, alta gestão corporativa e mentoria direta, consolidou o MAGE®: a metodologia definitiva para PMEs saírem da gestão por instinto.',
    takeaway: 'Transformar PMEs em empresas maduras, lucrativas e organizadas',
  },
];

export const MAGE_METHODOLOGY = {
  name: 'Metodologia MAGE®',
  tag: 'MÉTODO DE AVALIAÇÃO E GESTÃO EMPRESARIAL',
  subtitle: 'Diagnóstico, Transformação e Evolução da Gestão Empresarial',
  overview:
    'A Metodologia MAGE® — Método de Avaliação e Gestão Empresarial, é a metodologia criada por mim para diagnosticar, planejar, implantar e monitorar continuamente a gestão de pequenas e médias empresas.',
  purpose:
    'Transformar PMEs em organizações maduras, lucrativas, organizadas e preparadas para crescer, eliminando a gestão baseada no instinto.',
  
  principles: [
    {
      number: '01',
      title: 'Gestão baseada em evidências',
      description: 'Decisões orientadas por dados reais e fatos mensuráveis, nunca em achismo, opiniões soltas ou intuição.',
    },
    {
      number: '02',
      title: 'Melhoria contínua',
      description: 'Evolução iterativa e sistemática dos processos com ciclos curtos de feedback e aprendizado acumulado.',
    },
    {
      number: '03',
      title: 'Governança',
      description: 'Clareza de papéis, responsabilidades, alçadas de decisão e transparência entre sócios e lideranças.',
    },
    {
      number: '04',
      title: 'Gestão por indicadores',
      description: 'Métricas claras de desempenho (KPIs e OKRs) que conectam o chão de operação aos objetivos estratégicos.',
    },
    {
      number: '05',
      title: 'Inteligência Artificial aplicada',
      description: 'Integração de agentes inteligentes, automação de relatórios e análises preditivas para acelerar a gestão.',
    },
  ] as MagePrinciple[],

  pillars: [
    {
      letter: 'M',
      name: 'Medir',
      tagline: 'Levantar dados reais da empresa, não opinião',
      objective: 'Auditar o estado real de cada departamento e coletar dados confiáveis sem filtros ou viés de percepção.',
      tools: ['Questionário MAGE® 100 itens', 'Mapeamento de KPIs operacionais', 'Coleta automatizada de dados'],
      deliverables: 'Raio-X de Maturidade e Scorecard Departamental',
      indicators: 'Nível de Cobertura de Dados e Confiabilidade Métrica',
    },
    {
      letter: 'A',
      name: 'Analisar',
      tagline: 'Interpretar os dados, entender causas e padrões',
      objective: 'Decodificar os sintomas operacionais, identificar gargalos ocultos e correlacionar causas-raiz aos gargalos de lucro.',
      tools: ['Análise de Causa-Raiz (Ishikawa/5 Porquês)', 'Benchmarking setorial', 'Matriz GUT de Gravidade'],
      deliverables: 'Relatório Executivo Automatizado com Diagnóstico Categórico',
      indicators: 'Índice de Aderência Diagnóstica e Identificação de Desvios',
    },
    {
      letter: 'G',
      name: 'Gerenciar',
      tagline: 'Transformar a análise em ação, rotina e cobrança',
      objective: 'Implantar ritos de gestão, cadência de reuniões executivas, prestação de contas e execução disciplinada.',
      tools: ['Plano 5W2H', 'OKRs Trimestrais', 'Rituais de Alinhamento e Boards'],
      deliverables: 'Roadmap de Ação Executiva com Responsáveis e Prazos',
      indicators: 'Taxa de Execução do Plano de Ação e Cumprimento de Metas',
    },
    {
      letter: 'E',
      name: 'Evoluir',
      tagline: 'Reiniciar o ciclo com o aprendizado acumulado',
      objective: 'Consolidar as melhorias no DNA da empresa e recomeçar o ciclo em um patamar de maturidade superior contínua.',
      tools: ['Reavaliação Periódica MAGE®', 'Capacitação Contínua', 'Certificação MAGE®'],
      deliverables: 'Ciclo de Evolução Corporativa & Selo de Maturidade',
      indicators: 'Crescimento de Ebitda, Redução de Desperdícios e Retenção',
    },
  ] as MagePillar[],

  tenAreas: [
    { id: 1, name: 'Estratégia & Governança', description: 'Visão de longo prazo, alinhamento societário e estrutura de tomada de decisão.' },
    { id: 2, name: 'Finanças & Controladoria', description: 'Fluxo de caixa, margens reais, DRE, precificação e saúde financeira.' },
    { id: 3, name: 'Operações & Processos', description: 'Mapeamento de fluxo de valor, capacidade produtiva e padronização.' },
    { id: 4, name: 'Vendas & Comercial', description: 'Pipeline previsível, conversão, remuneração e metas orientadas a valor.' },
    { id: 5, name: 'Marketing & Posicionamento', description: 'Geração de demanda qualificada, autoridade de marca e proposta de valor.' },
    { id: 6, name: 'Pessoas & Liderança', description: 'Cultura, desenvolvimento de líderes, retenção de talentos e clima organizacional.' },
    { id: 7, name: 'Tecnologia & IA', description: 'Infraestrutura, automação de processos repetitivos e ferramentas inteligentes.' },
    { id: 8, name: 'Qualidade & Produtividade', description: 'Redução de desperdícios, índices de retrabalho e eficiência operacional.' },
    { id: 9, name: 'Clientes & Atendimento', description: 'NPS, experiência do cliente, retenção, pós-venda e satisfação.' },
    { id: 10, name: 'Inovação & Futuro', description: 'Novos produtos, serviços, modelos de receita e perenidade do negócio.' },
  ] as MageArea[],

  officialDiagnosis: {
    title: 'O Diagnóstico Oficial',
    tag: '100 QUESTÕES EXECUTIVAS',
    description:
      'O ponto de entrada prático da metodologia é um questionário rigoroso de 100 questões, com critérios objetivos de pontuação, interpretação automatizada de resultados e geração de um relatório executivo aprofundado.',
    features: [
      '100 questões distribuídas com peso nas 10 áreas-chave',
      'Critérios de pontuação transparentes e auditáveis',
      'Geração de Relatório Executivo Automatizado',
      'Classificação do Nível de Maturidade da Empresa (1 a 5)',
    ],
  },

  transformationPlan: {
    title: 'O Plano de Transformação',
    tag: 'ESTRUTURA DE EXECUÇÃO',
    description:
      'A partir do diagnóstico oficial, a metodologia MAGE® estrutura um plano de ação prático e acionável.',
    tools: [
      { name: 'Planejamento Estratégico', detail: 'Definição de objetivos claros e prioridades vitais.' },
      { name: 'Priorização', detail: 'Foco exclusivo nas alavancas que trazem maior retorno com menor esforço.' },
      { name: 'Roadmap', detail: 'Cronograma visual das entregas distribuídas por trimestres.' },
      { name: 'OKRs', detail: 'Objetivos e Resultados-Chave mensuráveis para cada liderança.' },
      { name: '5W2H', detail: 'Matriz operacional: O que, Por que, Quem, Onde, Quando, Como e Quanto custa.' },
    ],
  },

  aiIntegration: {
    title: 'IA na Metodologia MAGE®',
    tag: 'INTELIGÊNCIA ARTIFICIAL APLICADA',
    description:
      'Um capítulo inteiro é dedicado a como a inteligência artificial atua dentro do método, potencializando a tomada de decisão do empresário.',
    capabilities: [
      { title: 'Agentes de IA', desc: 'Assistentes dedicados para cada área da empresa apoiando análises operacionais.' },
      { title: 'Dashboards Inteligentes', desc: 'Visualização dinâmica de indicadores em tempo real.' },
      { title: 'Relatórios Automáticos', desc: 'Sínteses executivas e atas de reuniões geradas instantaneamente.' },
      { title: 'Recomendações Preditivas', desc: 'Sugestões de melhoria fundamentadas em padrões de dados.' },
      { title: 'Acompanhamento Contínuo', desc: 'Alertas preventivos para desvios de metas e gargalos de processo.' },
    ],
  },

  certification: {
    title: 'Certificação MAGE®',
    tag: 'SELO DE MATURIDADE EMPRESARIAL',
    description:
      'Reconhecimento oficial de empresas e lideranças que completaram os ciclos de maturidade, atestando conformidade com as melhores práticas de governança, eficiência e gestão por evidências.',
  },
};
