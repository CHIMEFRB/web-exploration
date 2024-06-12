// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/node_modules/primeicons/primeicons.css'],
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/chimefrb-preset/') }
  },
  nitro: {
    serverAssets: [
        {
            baseName: 'presets',
            dir: '../presets'
        }
    ]
}
})
