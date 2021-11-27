export default {
  ssr: false,

  target: 'static',

  head: {
    titleTemplate: '%s',
    title: 'Kitpipat Jaritwong',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Kitpipat Jaritwong's website" },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'Kitpipat Jaritwong' },
      { hid: 'og:description ', name: 'og:description', content: "Kitpipat Jaritwong's website" },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.gusbell.tech' },
      { hid: 'og:image', name: 'og:image', content: 'https://cdn.discordapp.com/attachments/888349851870429184/895346858409476168/og_img.png' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', name: 'og:image:height', content: '630' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/assets/global.css'],

  plugins: [
    { src: '~/plugins/mdi.js' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    'nuxt-animejs'
  ],

  modules: [
  ],

  build: {
  }
}
