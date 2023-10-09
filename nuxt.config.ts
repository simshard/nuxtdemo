// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    //postcss: {
     // postcssOptions: {
     //   plugins: {
     //     tailwindcss: {},
     //     autoprefixer: {},
     //   },
     // },
   // },
  },
  css: [
    "~/assets/css/tailwind.css"
  ]
})