// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "",
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "",
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || "",
    },
  },
  css: ["vuetify/lib/styles/main.sass", "~/assets/css/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
})
