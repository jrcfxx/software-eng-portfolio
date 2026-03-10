export type Locale = 'pt-BR' | 'en'

type PortfolioProject = {
  name: string
  description: string
  stack: string[]
  year: string
  liveUrl?: string
  repoUrl?: string
  note?: string
}

type PortfolioExperience = {
  type: 'education' | 'project' | 'learning' | 'award'
  title: string
  subtitle: string
  period: string
  description: string
}

type PortfolioJob = {
  role: string
  company: string
  period: string
  seasonal?: boolean
  bullets: string[]
}

type PortfolioCourse = {
  hours?: number
  title: string
  provider: string
  description: string
}

type PortfolioData = {
  name: string
  shortName: string
  role: string
  location: string
  email: string
  phone: string
  whatsappLabel: string
  heroIntro: string
  heroTagline: string
  quote: {
    text: string
    author: string
  }
  currentlyWorkingOn: string
  about: string
  contactsIntro: string
  funFacts: string[]
  skills: Array<{ name: string, items: string[] }>
  projects: PortfolioProject[]
  experiences: PortfolioExperience[]
  professionalExperience: PortfolioJob[]
  complementaryDevelopment: PortfolioCourse[]
  links: {
    github: string
    linkedin: string
    whatsapp: string
    portfolioRepo: string
  }
}

const baseLinks = {
  github: 'https://github.com/jrcfxx',
  linkedin: 'https://www.linkedin.com/in/julia-rocha-fiorini',
  whatsapp: 'https://wa.me/5531993200734',
  portfolioRepo: 'https://github.com/jrcfxx/software-eng-portfolio'
}

const portfolioPt: PortfolioData = {
  name: 'Júlia Rocha Fiorini',
  shortName: 'Júlia',
  role: 'Estudante de Engenharia de Software na PUC Minas e estagiária em desenvolvimento web',
  location: 'Belo Horizonte, Minas Gerais, Brasil',
  email: 'juliarochafiorini@gmail.com',
  phone: '(31) 99320-0734',
  whatsappLabel: 'WhatsApp',
  heroIntro: 'Olá, eu sou',
  heroTagline: 'Construindo aplicações web estáveis, bem estruturadas e orientadas à qualidade.',
  quote: {
    text: 'Transformo curiosidade técnica em profundidade: gosto de entender a lógica por trás de cada decisão.',
    author: 'Júlia Fiorini'
  },
  currentlyWorkingOn: 'Aplicações web full stack com PHP, Laravel, Vue e Vuetify',
  about: `Sou estudante de Engenharia de Software e atuo como estagiária em desenvolvimento web, com foco em construir aplicações estáveis, legíveis e bem estruturadas.

No dia a dia, trabalho com PHP, Laravel, Vue e Vuetify, participando do ciclo completo de entrega: implementação de funcionalidades, correções, deploys, monitoramento e melhorias contínuas.

Tenho perfil analítico e gosto de ir além do uso superficial das ferramentas. Por isso, estudo continuamente arquitetura, segurança, versionamento, comportamento de aplicações em produção e boas práticas modernas de desenvolvimento.`,
  contactsIntro: 'Tenho interesse em oportunidades para crescer como engenheira de software, colaborar em bons times e desenvolver soluções úteis. Se quiser conversar, estou por aqui.',
  funFacts: [
    'Experiência com desenvolvimento full stack em ambiente corporativo, unindo front-end, back-end e qualidade de entrega.',
    'Base prática em processos, organização e operação crítica, construída antes mesmo da transição para tecnologia.',
    'Interesse constante por arquitetura, segurança, testes, deploy e fundamentos de software.',
    'Inglês avançado e perfil investigativo, com foco em entender o porquê das decisões técnicas.'
  ],
  skills: [
    { name: 'Linguagens', items: ['PHP', 'JavaScript', 'Java', 'C', 'HTML', 'CSS'] },
    { name: 'Frameworks', items: ['Laravel', 'Vue', 'Vuetify', 'Nuxt.js', 'Spring Boot'] },
    { name: 'Banco de dados', items: ['MySQL'] },
    { name: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code', 'Deploy', 'Pipelines'] },
    { name: 'Competências', items: ['Resolução de problemas', 'Raciocínio lógico', 'Trabalho em equipe', 'Senso de urgência'] }
  ],
  projects: [
    {
      name: 'Sistema para Igreja Casa dos Discípulos',
      description: 'Sistema acadêmico desenvolvido para digitalizar módulos de estudo, gestão de células e rotinas administrativas da igreja, substituindo controles manuais em planilhas e documentos.',
      stack: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Sistema web'],
      year: '2025',
      note: 'Repositório privado ou não informado no momento.'
    },
    {
      name: 'Automatização de Faturamento',
      description: 'Automação com Python para reduzir tarefas manuais no faturamento, gerando ganho operacional e apoiando a evolução para atividades ligadas a planejamento e processos.',
      stack: ['Python', 'Automação', 'Processos'],
      year: '2024',
      note: 'Projeto interno, sem publicação pública.'
    },
    {
      name: 'Portfólio Profissional',
      description: 'Site bilíngue em Nuxt para apresentar trajetória, habilidades, experiências e projetos com identidade visual dark/tech e versão 3D integrada.',
      stack: ['Nuxt', 'Vue', 'TypeScript', 'Three.js'],
      year: '2026',
      repoUrl: baseLinks.portfolioRepo,
      liveUrl: baseLinks.portfolioRepo
    }
  ],
  experiences: [
    {
      type: 'education',
      title: 'Engenharia de Software',
      subtitle: 'PUC Minas',
      period: '2024 - 2028',
      description: 'Graduação com foco em fundamentos de software, desenvolvimento web, arquitetura e visão prática de negócio.'
    },
    {
      type: 'education',
      title: 'Técnico em Desenvolvimento de Sistemas',
      subtitle: 'SENAI CTTI',
      period: '2021 - 2023',
      description: 'Formação técnica que consolidou a base em lógica, programação e construção de sistemas.'
    },
    {
      type: 'project',
      title: 'Sistema para Igreja',
      subtitle: 'Projeto de destaque',
      period: '2025',
      description: 'Plataforma com módulos personalizáveis, vídeos, documentos, quizzes e elementos de gamificação para engajar usuários e organizar a gestão da igreja.'
    },
    {
      type: 'award',
      title: 'Destaques na Conexa Saúde',
      subtitle: 'Reconhecimentos internos',
      period: '2023',
      description: 'Recebi os prêmios Destaque do Semestre e Destaque do Trimestre por desempenho, organização e impacto operacional.'
    }
  ],
  professionalExperience: [
    {
      role: 'Estagiária em Desenvolvimento Web',
      company: 'Lexis Nexis Risk Solutions',
      period: 'jun/2024 - atual',
      bullets: [
        'Desenvolvimento e manutenção de aplicações web internas e orientadas ao cliente, com atuação full stack.',
        'Implementação de funcionalidades, correções de segurança e melhorias contínuas em aplicações com Vue.js e PHP.',
        'Participação em deploys, monitoramento e ajustes operacionais para garantir estabilidade e qualidade nas entregas.',
        'Colaboração direta com engenheiros de software e QA na definição técnica, validação e integração contínua.'
      ]
    },
    {
      role: 'Assistente Financeira',
      company: 'Conexa Saúde',
      period: 'out/2022 - jun/2024',
      bullets: [
        'Atuação em faturamento B2B e B2C, emissão e conferência de notas fiscais e rotinas de contas médicas.',
        'Análise e envio de XML de operadoras, com atenção a prazos, consistência de dados e criticidade operacional.',
        'Apoio a processos corporativos com foco em organização, comunicação com clientes e resolução de problemas.'
      ]
    },
    {
      role: 'Jovem Aprendiz Financeiro/Administrativo',
      company: 'Conexa Saúde',
      period: 'fev/2022 - out/2022',
      bullets: [
        'Atuação inicial em RH com admissão, documentação, benefícios e suporte operacional aos colaboradores.',
        'Rotação para a área financeira, ampliando experiência em organização de processos, atenção a detalhes e cumprimento de fluxos.'
      ]
    }
  ],
  complementaryDevelopment: [
    {
      title: 'Java do Básico ao Avançado',
      provider: 'Udemy',
      description: 'Aprofundamento em Java e consolidação da base de orientação a objetos e desenvolvimento backend.'
    },
    {
      title: 'Inglês Avançado',
      provider: 'ICBEU',
      description: 'Formação em inglês com foco em leitura, comunicação e desenvolvimento contínuo para contexto profissional.'
    }
  ],
  links: baseLinks
}

const portfolioEn: PortfolioData = {
  name: 'Julia Rocha Fiorini',
  shortName: 'Julia',
  role: 'Software Engineering student at PUC Minas and web development intern',
  location: 'Belo Horizonte, Minas Gerais, Brazil',
  email: 'juliarochafiorini@gmail.com',
  phone: '+55 31 99320-0734',
  whatsappLabel: 'WhatsApp',
  heroIntro: 'Hi, I am',
  heroTagline: 'Building stable, well-structured web applications with a strong focus on quality.',
  quote: {
    text: 'I turn technical curiosity into depth by understanding the logic behind each decision.',
    author: 'Julia Fiorini'
  },
  currentlyWorkingOn: 'Full stack web applications with PHP, Laravel, Vue and Vuetify',
  about: `I am a Software Engineering student currently working as a web development intern, focused on building stable, maintainable and well-structured applications.

In my daily work I use PHP, Laravel, Vue and Vuetify, taking part in the full delivery cycle: feature implementation, bug fixing, deployments, monitoring and continuous improvements.

I have an analytical profile and I like to go beyond the superficial use of tools. Because of that, I keep studying architecture, security, version control, production behavior and modern software engineering practices.`,
  contactsIntro: 'I am interested in opportunities to grow as a software engineer, collaborate with strong teams and build useful solutions. Feel free to reach out.',
  funFacts: [
    'Hands-on full stack experience in a corporate environment, connecting front-end, back-end and delivery quality.',
    'Strong operational and organizational background built before transitioning fully into technology.',
    'Continuous interest in architecture, security, testing, deployment and software fundamentals.',
    'Advanced English skills and an investigative mindset focused on the reasoning behind technical decisions.'
  ],
  skills: [
    { name: 'Languages', items: ['PHP', 'JavaScript', 'Java', 'C', 'HTML', 'CSS'] },
    { name: 'Frameworks', items: ['Laravel', 'Vue', 'Vuetify', 'Nuxt.js', 'Spring Boot'] },
    { name: 'Database', items: ['MySQL'] },
    { name: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Deploy', 'Pipelines'] },
    { name: 'Strengths', items: ['Problem solving', 'Logical reasoning', 'Teamwork', 'Sense of urgency'] }
  ],
  projects: [
    {
      name: 'Casa dos Discipulos Church System',
      description: 'Academic project created to digitize study modules, cell group management and administrative workflows, replacing manual controls based on spreadsheets and documents.',
      stack: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Web system'],
      year: '2025',
      note: 'Private repository or link not available yet.'
    },
    {
      name: 'Billing Automation',
      description: 'Python automation initiative designed to reduce manual billing work, improve operational efficiency and support the transition to process-oriented activities.',
      stack: ['Python', 'Automation', 'Processes'],
      year: '2024',
      note: 'Internal project with no public release.'
    },
    {
      name: 'Professional Portfolio',
      description: 'Bilingual Nuxt portfolio website presenting my background, skills, experience and projects with a dark/tech visual identity and a connected 3D experience.',
      stack: ['Nuxt', 'Vue', 'TypeScript', 'Three.js'],
      year: '2026',
      repoUrl: baseLinks.portfolioRepo,
      liveUrl: baseLinks.portfolioRepo
    }
  ],
  experiences: [
    {
      type: 'education',
      title: 'Software Engineering',
      subtitle: 'PUC Minas',
      period: '2024 - 2028',
      description: 'Bachelor degree focused on software fundamentals, web development, architecture and practical business awareness.'
    },
    {
      type: 'education',
      title: 'Systems Development Technician',
      subtitle: 'SENAI CTTI',
      period: '2021 - 2023',
      description: 'Technical education that strengthened my foundations in logic, programming and system building.'
    },
    {
      type: 'project',
      title: 'Church System',
      subtitle: 'Featured project',
      period: '2025',
      description: 'Platform with customizable study modules, videos, documents, quizzes and gamification elements to improve engagement and operational organization.'
    },
    {
      type: 'award',
      title: 'Recognition at Conexa Saude',
      subtitle: 'Internal awards',
      period: '2023',
      description: 'Received both Semester Highlight and Quarter Highlight awards for performance, organization and operational impact.'
    }
  ],
  professionalExperience: [
    {
      role: 'Web Development Intern',
      company: 'Lexis Nexis Risk Solutions',
      period: 'Jun/2024 - present',
      bullets: [
        'Developing and maintaining internal and client-oriented web applications with a full stack scope.',
        'Delivering new features, security fixes and continuous improvements in solutions built with Vue.js and PHP.',
        'Supporting deployments, monitoring and operational adjustments to keep deliveries stable and reliable.',
        'Working closely with software engineers and QA professionals on technical definition, validation and continuous integration.'
      ]
    },
    {
      role: 'Financial Assistant',
      company: 'Conexa Saude',
      period: 'Oct/2022 - Jun/2024',
      bullets: [
        'Handled B2B and B2C billing workflows, invoice issuance and verification, and medical account routines.',
        'Managed carrier XML analysis and submissions with strong attention to deadlines, data consistency and critical operations.',
        'Supported corporate processes with a focus on organization, client communication and problem solving.'
      ]
    },
    {
      role: 'Administrative and Financial Apprentice',
      company: 'Conexa Saude',
      period: 'Feb/2022 - Oct/2022',
      bullets: [
        'Started in HR supporting admissions, documentation, benefits and employee operational routines.',
        'Rotated into the financial area, strengthening process organization, attention to detail and workflow discipline.'
      ]
    }
  ],
  complementaryDevelopment: [
    {
      title: 'Java from Beginner to Advanced',
      provider: 'Udemy',
      description: 'Deeper study of Java with emphasis on object-oriented programming and backend foundations.'
    },
    {
      title: 'Advanced English',
      provider: 'ICBEU',
      description: 'English training focused on reading, communication and continuous professional development.'
    }
  ],
  links: baseLinks
}

export const uiStrings = {
  'pt-BR': {
    nav: { home: 'Início', works: 'Projetos', aboutMe: 'Sobre mim', experiences: 'Experiências', contacts: 'Contatos' },
    contactMe: 'Entrar em contato',
    readMore: 'Ver contatos',
    messageMeHere: 'Fale comigo',
    projects: 'projetos',
    skills: 'skills',
    aboutMe: 'sobre-mim',
    contacts: 'contatos',
    myFunFacts: 'diferenciais',
    media: 'Redes',
    experiences: 'experiências',
    professionalExperience: 'Experiência profissional',
    complementaryDevelopment: 'Formação complementar',
    educationAndProjects: 'Formação e destaques',
    sendMessage: 'Enviar mensagem',
    yourName: 'Seu nome',
    yourEmail: 'Seu e-mail',
    message: 'Mensagem',
    required: 'Obrigatório',
    invalidEmail: 'E-mail inválido',
    formSuccess: 'Mensagem enviada! Em breve respondo.',
    formError: 'Erro ao enviar. Tente novamente ou use os contatos abaixo.',
    basedIn: 'Base',
    stackLabel: 'Stack',
    projectRepo: 'Repositório',
    projectLive: 'Abrir',
    noPublicLink: 'Link público indisponível',
    phone: 'Telefone'
  },
  'en': {
    nav: { home: 'Home', works: 'Projects', aboutMe: 'About me', experiences: 'Experience', contacts: 'Contact' },
    contactMe: 'Get in touch',
    readMore: 'See contacts',
    messageMeHere: 'Reach me here',
    projects: 'projects',
    skills: 'skills',
    aboutMe: 'about-me',
    contacts: 'contacts',
    myFunFacts: 'highlights',
    media: 'Media',
    experiences: 'experience',
    professionalExperience: 'Professional experience',
    complementaryDevelopment: 'Complementary development',
    educationAndProjects: 'Education and highlights',
    sendMessage: 'Send message',
    yourName: 'Your name',
    yourEmail: 'Your email',
    message: 'Message',
    required: 'Required',
    invalidEmail: 'Invalid email',
    formSuccess: 'Message sent! I will get back to you soon.',
    formError: 'Failed to send. Try again or use the contact links below.',
    basedIn: 'Based in',
    stackLabel: 'Stack',
    projectRepo: 'Repository',
    projectLive: 'Open',
    noPublicLink: 'Public link unavailable',
    phone: 'Phone'
  }
} as const

export function getPortfolio(locale: Locale) {
  return locale === 'pt-BR' ? portfolioPt : portfolioEn
}

export function getUi(locale: Locale) {
  return uiStrings[locale]
}

export const portfolio = portfolioPt
