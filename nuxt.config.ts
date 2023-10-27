// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  app: {
    head: {
      title: 'Nuxt Template',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  build: { transpile: ['vue-toastification'] },

  css: [
    "~/assets/css/animations.css",
    'vue-toastification/dist/index.css'
  ],

  imports: {
    dirs: [
      'composables/**'
    ]
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],

  plugins: [
    { src: '~/plugins/vue-toastification.client.js', mode: 'client' }
  ],

  // #########################
  // ## Packages config
  // #########################

  colorMode: {
    preference: 'dark',
    dataValue: 'theme',
    classSuffix: '',
  },

  googleFonts: {
    download: true,
    families: {
      Inter: true,
      Poppins: true
    }
  },

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Template',
      short_name: 'NuxtTemplate',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'og.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'og.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'og.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
})
