// @ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js'

const isLocalLayer = process.env.LOCAL_LAYER === 'true'

export default defineNuxtConfig({
  ssr: false,
  builder: 'vite',

  app: {
    head: {
      script: [{ innerHTML: 'var exports = {}' }]
    },
    // bodyAttrs: {
    //   class: 'h-full'
    // },
    rootAttrs: {
      class: 'h-full'
    }
  },

  extends: [
    isLocalLayer
      ? '../injective-ui/layer'
      : 'github:InjectiveLabs/injective-ui/layer#master'
  ],

  vite: {
    plugins: [
      veauryVitePlugins({
        type: 'vue',
        isNuxt: true
      })
    ]
  },

  css: ['@/assets/css/tailwind.css'],

  pinia: {
    autoImports: ['defineStore']
  },

  sourcemap: {
    client: true,
    server: false
  },

  modules: ['@nuxt/ui', '@nuxt/eslint'],

  imports: {
    dirs: ['composables/**', 'store/*.ts', 'store/**/index.ts']
  },

  // @ts-ignore
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [{ code: 'en', file: './i18n/locales/en.ts' }]
  },

  // extends: [
  //   isLocalLayer
  //     ? '../injective-ui/layer'
  //     : 'github:InjectiveLabs/injective-ui/layer#master'
  // ],

  colorMode: {
    fallback: 'dark',
    preference: 'dark',
    storage: 'localStorage',
    componentName: 'ColorScheme',
    hid: 'nuxt-color-mode-script',
    storageKey: 'nuxt-color-mode',
    globalName: '__NUXT_COLOR_MODE__'
  },

  compatibilityDate: '2025-06-10'
})
