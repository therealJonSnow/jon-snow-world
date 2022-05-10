import { resolve } from 'path'
const hljs = require('highlight.js');
import tailwindTypography from '@tailwindcss/typography'
export default {
  target: 'static',

  generate: {
    fallback: true
  },

  head: {
    title: 'Jonny Snow',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'iQp0mxpdcc4y0iOiYjFbZ8haHarriLOQWvtE0QhLsBc' },
      { hid: 'description', name: 'description', content: 'Hi I\'m, Jonny Snow, a front end web developer currently based in Hampshire looking to help those in need of website with flare.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Permanent+Marker&display=swap' }
    ]
  },

  loading: false,

  css: [
    '~/assets/scss/tailwind.scss'
  ],

  plugins: [
    {
      src: '~plugins/global'
    }
  ],

  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    'nuxt-purgecss'
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  build: {
    extractCSS: true,
    postcss: {
      plugins: { tailwindcss: resolve(__dirname, './tailwind.config.js') }
    }
  },

  purgeCSS: { mode: 'postcss' }
}
