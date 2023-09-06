// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  app: {
    head: {
      title: 'Nuxt 3 | Boilerplate',
      meta: [
        { hid: 'description', name: 'description', content: 'Nuxt 3 boilerplate to quickly begin' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Nuxt 3 | Boilerplate',
        },
        { hid: 'og:url', property: 'og:url', content: 'OpenGraph Page URL' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Nuxt 3 boilerplate to quickly begin',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/og.png',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Nuxt 3 | Boilerplate',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'Twitter Page URL',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Nuxt 3 boilerplate to quickly begin',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/og.png',
        },
      ],
    },
  },

  plugins: [
    { src: '~/plugins/vue-toastification.client.js', mode: 'client' }
  ],

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],

  // #########################
  // ## Packages config
  // #########################

  colorMode: {
    preference: 'dark',
    dataValue: 'theme',
    classSuffix: '',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  postcss: {
    plugins: {
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
})
