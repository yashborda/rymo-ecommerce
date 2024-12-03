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
  },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      firebaseConfig: {
        apiKey: process.env.VUE_APP_API_KEY,
        authDomain: process.env.VUE_APP_AUTH_DOMAIN ,
        databaseURL: process.env.VUE_APP_DATABASE_URL,
        projectId: process.env.VUE_APP_PROJECT_ID,
        storageBucket: process.env.VUE_APP_STORAGE_BUCKET,    
        messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_APP_ID,
        measurementId: process.env.VUE_APP_MEASUREMENT_ID
      },
    },
  },
});