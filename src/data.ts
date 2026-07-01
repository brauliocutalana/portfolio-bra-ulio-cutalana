import { Project, Skill, Experience } from './types';
import braulioProfile from './assets/images/Bráulio.jpeg';

export const personalInfo = {
  name: 'Bráulio C. Cutalana',
  title: 'Desenvolvedor Front End',
  subtitle: 'Transformando ideias em interfaces funcionais e elegantes',
  bio: 'Sou desenvolvedor front end com habilidades em HTML, CSS, JavaScript e React.js. Falo português nativo e inglês fluente. Tenho experiência em criação de interfaces modernas, integração com APIs e otimização de desempenho. Sou apaixonado por tecnologia, design limpo e boas práticas de código.',
  location: 'Luanda, Angola',
  email: 'brauliocutalana@example.com',
  linkedin: 'https://linkedin.com/in/braulio-cutalana',
  github: 'https://github.com/brauliocutalana',
  photo: braulioProfile,
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Fluente (C1)' }
  ],
  stats: [
    { label: 'Projetos Concluídos', value: '15+' },
    { label: 'Anos de Estudo & Prática', value: '3+' },
    { label: 'Tecnologias Dominadas', value: '10+' },
    { label: 'Satisfação de Clientes/Parceiros', value: '100%' }
  ]
};

export const skills: Skill[] = [
  {
    name: 'React.js',
    category: 'frontend',
    iconName: 'ReactIcon',
    level: 'Avançado',
    description: 'Desenvolvimento de SPAs escaláveis, gerenciamento de estado complexo, Hooks e otimização de renderização.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    iconName: 'JsIcon',
    level: 'Avançado',
    description: 'Lógica estruturada, manipulação de DOM, requisições assíncronas, Promises, fetch e consumo de APIs RESTful.'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    iconName: 'HtmlIcon',
    level: 'Especialista',
    description: 'Semântica robusta, layouts modernos com Grid/Flexbox, animações fluidas e design responsivo com Tailwind.'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    iconName: 'TailwindIcon',
    level: 'Especialista',
    description: 'Estilização rápida e produtiva por utilitários, criação de layouts responsivos, consistentes e performáticos.'
  },
  {
    name: 'Boas Práticas & Clean Code',
    category: 'concept',
    iconName: 'CodeIcon',
    level: 'Avançado',
    description: 'Componentização limpa, reutilização de código, documentação básica, linting e foco em desempenho.'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'FinFlow — Dashboard Financeiro Dinâmico',
    description: 'Painel completo de controle de finanças pessoais com gráficos interativos em tempo real, filtros avançados e fluxo de caixa detalhado.',
    longDescription: 'O FinFlow é um aplicativo robusto de finanças pessoais e empresariais. Ele permite que o usuário acompanhe receitas, despesas, categorize transações e analise sua saúde financeira através de gráficos visuais de alta fidelidade. O projeto foca no desempenho e na responsividade, garantindo carregamento rápido mesmo com grandes volumes de dados.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'Tailwind CSS', 'Recharts', 'LocalStorage'],
    features: [
      'Visualização interativa de despesas por categoria usando gráficos de pizza e barras',
      'Cadastro, edição e exclusão de transações com persistência local',
      'Filtros por período temporal (mensal, anual) e tipo de operação',
      'Cálculo automático de saldos, receitas totais e projeções futuras',
      'Interface limpa com suporte opcional a modo escuro simulado'
    ],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/brauliocutalana/finflow'
  },
  {
    id: '2',
    title: 'Aura Store — E-Commerce Minimalista',
    description: 'Loja virtual de design moderno focada na experiência de compra premium, com carrinho dinâmico, busca, filtros e acessibilidade completa.',
    longDescription: 'A Aura Store é uma aplicação de e-commerce desenvolvida com foco em acessibilidade e estética minimalista. O projeto conta com catálogo dinâmico de produtos, busca em tempo real, filtragem por categorias e preços, gerenciamento de carrinho de compras de alta reatividade e simulação de checkout. A estrutura do código segue rigorosamente as diretrizes WCAG de acessibilidade.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'WCAG 2.1'],
    features: [
      'Navegação 100% amigável para leitores de tela e controle por teclado',
      'Filtros de pesquisa reativos e ordenação avançada de itens',
      'Gaveta (drawer) do carrinho com atualização em tempo real de totais',
      'Formulários com validação inteligente de dados e máscaras de digitação',
      'Animações elegantes de transição usando motion'
    ],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/brauliocutalana/aura-store'
  },
  {
    id: '3',
    title: 'ZenTask — Kanban Organizador Ágil',
    description: 'Plataforma de produtividade inspirada na metodologia Kanban, com drag-and-drop intuitivo, tags e cronômetro Pomodoro integrado.',
    longDescription: 'O ZenTask é uma ferramenta de gestão de projetos que ajuda profissionais a organizarem suas tarefas diárias de forma ágil e sem distrações. Possui quadros de tarefas intuitivos que podem ser movidos entre colunas, categorização de prioridades com cores, busca rápida, estatísticas de conclusão e um cronômetro Pomodoro interativo para impulsionar o foco do usuário.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'TypeScript', 'CSS Modules', 'Lucide Icons'],
    features: [
      'Quadros Kanban organizados por "A Fazer", "Em Progresso" e "Concluído"',
      'Movimentação interativa de tarefas entre colunas',
      'Timer Pomodoro com alertas sonoros e contagem regressiva reativa',
      'Sistema de tags e prioridades (Alta, Média, Baixa) com filtros rápidos',
      'Persistência imediata de tarefas no navegador usando LocalStorage'
    ],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/brauliocutalana/zentask'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Desenvolvedor Front End Freelancer',
    company: 'Trabalho Autônomo',
    period: '2025 - Presente',
    description: 'Criação de landing pages, web apps e e-commerces focados na conversão e estética premium para pequenas e médias empresas.',
    achievements: [
      'Desenvolvimento de interfaces performáticas garantindo pontuações superiores a 90 no Google Lighthouse.',
      'Integração eficiente de APIs REST e sistemas de pagamento em plataformas client-side.',
      'Refatoração de código legado promovendo facilidade de manutenção e modularidade em projetos React.'
    ]
  },
  {
    id: '2',
    role: 'Desenvolvedor Front End em Treinamento',
    company: 'Programas de Especialização & Bootcamps',
    period: '2023 - 2024',
    description: 'Formação intensiva em engenharia front-end com forte ênfase em arquitetura JavaScript moderna, React, design responsivo e acessibilidade.',
    achievements: [
      'Construção de dezenas de projetos de ponta a ponta simulando cenários corporativos reais.',
      'Colaboração em equipes ágeis via Git e metodologias Scrum em repositórios compartilhados.',
      'Estudo aprofundado de padrões de design, algoritmos básicos e melhores práticas de UI/UX.'
    ]
  }
];
