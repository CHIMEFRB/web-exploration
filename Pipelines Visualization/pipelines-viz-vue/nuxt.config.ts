// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/node_modules/primeicons/primeicons.css'],
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss', "@nuxtjs/google-fonts"],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/chimefrb-preset/') }
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 700],
      Inconsolata: [300],
    }
  },
});
