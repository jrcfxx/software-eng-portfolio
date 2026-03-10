export function usePortfolioScene() {
  const config = useRuntimeConfig().public as {
    splineSceneUrl?: string
    glbModelUrl?: string
    screenObjectName?: string
    screenFlip?: boolean
    screenNudge?: number
  }

  const heroSplineUrl = computed(() => config.splineSceneUrl || '')
  const modelUrl = computed(() => config.glbModelUrl || '/models/computador-cenario.glb')
  const screenObjectName = computed(() => config.screenObjectName || 'screen')
  const screenFlip = computed(() => config.screenFlip ?? false)
  const screenNudge = computed(() => config.screenNudge ?? -0.02)
  const embedUrl = computed(() => '/embed')

  return {
    heroSplineUrl,
    modelUrl,
    screenObjectName,
    screenFlip,
    screenNudge,
    embedUrl
  }
}
