import { baseLinks } from './content.shared'
import type { PortfolioContent } from './types'

export const portfolioPt: PortfolioContent = {
  name: 'Júlia Rocha Fiorini',
  shortName: 'Júlia',
  role: 'Estudante de Engenharia de Software na PUC Minas e estagiária em desenvolvimento web',
  location: 'Belo Horizonte, Minas Gerais, Brasil',
  email: 'juliarochafiorini@gmail.com',
  phone: '(31) 99320-0734',
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
    { id: 'languages', name: 'Linguagens', items: ['PHP', 'JavaScript', 'Java', 'C', 'HTML', 'CSS'] },
    { id: 'frameworks', name: 'Frameworks', items: ['Laravel', 'Vue', 'Vuetify', 'Nuxt.js', 'Spring Boot'] },
    { id: 'database', name: 'Banco de dados', items: ['MySQL'] },
    { id: 'tools', name: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code', 'Deploy', 'Pipelines'] },
    { id: 'strengths', name: 'Competências', items: ['Resolução de problemas', 'Raciocínio lógico', 'Trabalho em equipe', 'Senso de urgência'] }
  ],
  projects: [
    {
      id: 'church-system',
      name: 'Sistema para Igreja Casa dos Discípulos',
      description: 'Sistema acadêmico desenvolvido para digitalizar módulos de estudo, gestão de células e rotinas administrativas da igreja, substituindo controles manuais em planilhas e documentos.',
      stack: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Sistema web'],
      year: '2025',
      links: {},
      note: 'Repositório privado ou não informado no momento.'
    },
    {
      id: 'billing-automation',
      name: 'Automatização de Faturamento',
      description: 'Automação com Python para reduzir tarefas manuais no faturamento, gerando ganho operacional e apoiando a evolução para atividades ligadas a planejamento e processos.',
      stack: ['Python', 'Automação', 'Processos'],
      year: '2024',
      links: {},
      note: 'Projeto interno, sem publicação pública.'
    },
    {
      id: 'professional-portfolio',
      name: 'Portfólio Profissional',
      description: 'Site bilíngue em Nuxt para apresentar trajetória, habilidades, experiências e projetos com identidade visual dark/tech e versão 3D integrada.',
      stack: ['Nuxt', 'Vue', 'TypeScript', 'Three.js'],
      year: '2026',
      links: {
        repo: baseLinks.portfolioRepo,
        live: baseLinks.portfolioRepo
      }
    }
  ],
  experiences: [
    {
      id: 'puc-minas',
      type: 'education',
      title: 'Engenharia de Software',
      subtitle: 'PUC Minas',
      period: '2024 - 2028',
      description: 'Graduação com foco em fundamentos de software, desenvolvimento web, arquitetura e visão prática de negócio.'
    },
    {
      id: 'senai-ctti',
      type: 'education',
      title: 'Técnico em Desenvolvimento de Sistemas',
      subtitle: 'SENAI CTTI',
      period: '2021 - 2023',
      description: 'Formação técnica que consolidou a base em lógica, programação e construção de sistemas.'
    },
    {
      id: 'featured-project',
      type: 'project',
      title: 'Sistema para Igreja',
      subtitle: 'Projeto de destaque',
      period: '2025',
      description: 'Plataforma com módulos personalizáveis, vídeos, documentos, quizzes e elementos de gamificação para engajar usuários e organizar a gestão da igreja.'
    },
    {
      id: 'conexa-awards',
      type: 'award',
      title: 'Destaques na Conexa Saúde',
      subtitle: 'Reconhecimentos internos',
      period: '2023',
      description: 'Recebi os prêmios Destaque do Semestre e Destaque do Trimestre por desempenho, organização e impacto operacional.'
    }
  ],
  professionalExperience: [
    {
      id: 'lexis-nexis',
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
      id: 'conexa-finance',
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
      id: 'conexa-apprentice',
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
      id: 'java-advanced',
      title: 'Java do Básico ao Avançado',
      provider: 'Udemy',
      description: 'Aprofundamento em Java e consolidação da base de orientação a objetos e desenvolvimento backend.'
    },
    {
      id: 'advanced-english',
      title: 'Inglês Avançado',
      provider: 'ICBEU',
      description: 'Formação em inglês com foco em leitura, comunicação e desenvolvimento contínuo para contexto profissional.'
    }
  ],
  links: baseLinks
}
