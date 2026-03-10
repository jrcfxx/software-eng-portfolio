import { portfolioEn } from './content.en'
import { portfolioPt } from './content.pt-BR'
import { uiStrings } from './ui'
import type { Locale } from './types'

export type * from './types'

const portfolioByLocale = {
  'pt-BR': portfolioPt,
  'en': portfolioEn
} as const

export function getPortfolio(locale: Locale) {
  return portfolioByLocale[locale]
}

export function getUi(locale: Locale) {
  return uiStrings[locale]
}

export const portfolio = portfolioPt
