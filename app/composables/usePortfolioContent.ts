import { getPortfolio, getUi } from '~/data/portfolio'

export function usePortfolioContent() {
  const { locale } = usePortfolioLocale()

  const portfolio = computed(() => getPortfolio(locale.value))
  const ui = computed(() => getUi(locale.value))

  return { portfolio, ui }
}
