import { baseLinks } from './content.shared'
import type { PortfolioContent } from './types'

export const portfolioEn: PortfolioContent = {
  name: 'Julia Rocha Fiorini',
  shortName: 'Julia',
  role: 'Software Engineering student at PUC Minas and web development intern',
  location: 'Belo Horizonte, Minas Gerais, Brazil',
  email: 'juliarochafiorini@gmail.com',
  phone: '+55 31 99320-0734',
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
    { id: 'languages', name: 'Languages', items: ['PHP', 'JavaScript', 'Java', 'C', 'HTML', 'CSS'] },
    { id: 'frameworks', name: 'Frameworks', items: ['Laravel', 'Vue', 'Vuetify', 'Nuxt.js', 'Spring Boot'] },
    { id: 'database', name: 'Database', items: ['MySQL'] },
    { id: 'tools', name: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Deploy', 'Pipelines'] },
    { id: 'strengths', name: 'Strengths', items: ['Problem solving', 'Logical reasoning', 'Teamwork', 'Sense of urgency'] }
  ],
  projects: [
    {
      id: 'church-system',
      name: 'Casa dos Discipulos Church System',
      description: 'Academic project created to digitize study modules, cell group management and administrative workflows, replacing manual controls based on spreadsheets and documents.',
      stack: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Web system'],
      year: '2025',
      links: {},
      note: 'Private repository or link not available yet.'
    },
    {
      id: 'billing-automation',
      name: 'Billing Automation',
      description: 'Python automation initiative designed to reduce manual billing work, improve operational efficiency and support the transition to process-oriented activities.',
      stack: ['Python', 'Automation', 'Processes'],
      year: '2024',
      links: {},
      note: 'Internal project with no public release.'
    },
    {
      id: 'professional-portfolio',
      name: 'Professional Portfolio',
      description: 'Bilingual Nuxt portfolio website presenting my background, skills, experience and projects with a dark/tech visual identity and a connected 3D experience.',
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
      title: 'Software Engineering',
      subtitle: 'PUC Minas',
      period: '2024 - 2028',
      description: 'Bachelor degree focused on software fundamentals, web development, architecture and practical business awareness.'
    },
    {
      id: 'senai-ctti',
      type: 'education',
      title: 'Systems Development Technician',
      subtitle: 'SENAI CTTI',
      period: '2021 - 2023',
      description: 'Technical education that strengthened my foundations in logic, programming and system building.'
    },
    {
      id: 'featured-project',
      type: 'project',
      title: 'Church System',
      subtitle: 'Featured project',
      period: '2025',
      description: 'Platform with customizable study modules, videos, documents, quizzes and gamification elements to improve engagement and operational organization.'
    },
    {
      id: 'conexa-awards',
      type: 'award',
      title: 'Recognition at Conexa Saude',
      subtitle: 'Internal awards',
      period: '2023',
      description: 'Received both Semester Highlight and Quarter Highlight awards for performance, organization and operational impact.'
    }
  ],
  professionalExperience: [
    {
      id: 'lexis-nexis',
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
      id: 'conexa-finance',
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
      id: 'conexa-apprentice',
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
      id: 'java-advanced',
      title: 'Java from Beginner to Advanced',
      provider: 'Udemy',
      description: 'Deeper study of Java with emphasis on object-oriented programming and backend foundations.'
    },
    {
      id: 'advanced-english',
      title: 'Advanced English',
      provider: 'ICBEU',
      description: 'English training focused on reading, communication and continuous professional development.'
    }
  ],
  links: baseLinks
}
