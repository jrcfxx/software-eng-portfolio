// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      /** URL da cena Spline usada no hero da home. */
      splineSceneUrl: process.env.NUXT_PUBLIC_SPLINE_SCENE_URL || 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
      /** EmailJS para o formulário de contato. Defina via .env para ativar o envio. */
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      /** Modelo GLB usado na rota 3D. */
      glbModelUrl: process.env.NUXT_PUBLIC_GLB_MODEL_URL || '/models/computador-cenario.glb',
      /** Nome do objeto da tela dentro do GLB. */
      screenObjectName: process.env.NUXT_PUBLIC_SCREEN_OBJECT_NAME || 'screen',
      /** true = gira a tela 180° caso o conteúdo fique invertido. */
      screenFlip: process.env.NUXT_PUBLIC_SCREEN_FLIP === 'true',
      /** Ajuste fino da posição da tela 3D no mesh do monitor. */
      screenNudge: Number(process.env.NUXT_PUBLIC_SCREEN_NUDGE ?? -0.02)
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
