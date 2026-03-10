export type Locale = 'pt-BR' | 'en'

export type PortfolioLinkSet = {
  github: string
  linkedin: string
  whatsapp: string
  portfolioRepo: string
}

export type SkillCategory = {
  id: string
  name: string
  items: string[]
}

export type PortfolioProject = {
  id: string
  name: string
  description: string
  stack: string[]
  year: string
  links: {
    live?: string
    repo?: string
  }
  note?: string
}

export type PortfolioExperienceEntry = {
  id: string
  type: 'education' | 'project' | 'award'
  title: string
  subtitle: string
  period: string
  description: string
}

export type PortfolioJob = {
  id: string
  role: string
  company: string
  period: string
  bullets: string[]
}

export type PortfolioCourse = {
  id: string
  hours?: number
  title: string
  provider: string
  description: string
}

export type PortfolioContent = {
  name: string
  shortName: string
  role: string
  location: string
  email: string
  phone: string
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
  skills: SkillCategory[]
  projects: PortfolioProject[]
  experiences: PortfolioExperienceEntry[]
  professionalExperience: PortfolioJob[]
  complementaryDevelopment: PortfolioCourse[]
  links: PortfolioLinkSet
}

export type PortfolioUi = {
  nav: {
    home: string
    works: string
    aboutMe: string
    experiences: string
    contacts: string
  }
  contactMe: string
  readMore: string
  messageMeHere: string
  projects: string
  skills: string
  aboutMe: string
  contacts: string
  myFunFacts: string
  media: string
  experiences: string
  professionalExperience: string
  complementaryDevelopment: string
  educationAndProjects: string
  sendMessage: string
  yourName: string
  yourEmail: string
  message: string
  required: string
  invalidEmail: string
  formSuccess: string
  formError: string
  basedIn: string
  stackLabel: string
  projectRepo: string
  projectLive: string
  noPublicLink: string
  phone: string
  portfolio3d: string
  backToHome: string
}
