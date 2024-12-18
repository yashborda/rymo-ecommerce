// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'sweetalert2/dist/sweetalert2.min.css',
    '@/assets/sass/main.css',
    '@fontsource/poppins',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Rymo Shopping',
      link: [
        { rel: 'icon', href: '/favicon.png' },
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
});