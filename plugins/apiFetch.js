import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

   nuxtApp.provide('apiFetch', $fetch.create({ baseURL: 'http://localhost:8000' }))
  //nuxtApp.provide('hello',  name => `Hello ${name}!!`)config.BASE_URL
})