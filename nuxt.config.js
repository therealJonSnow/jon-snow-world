
export default {
  mode: 'universal',
  target: 'static',

  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jonny Snow',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'iQp0mxpdcc4y0iOiYjFbZ8haHarriLOQWvtE0QhLsBc' },
      { hid: 'description', name: 'description', content: 'Hi I\'m, Jonny Snow, a front end web developer currently based in Hampshire looking to help those in need of website with flare.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oxygen:300,400,700|Poiret+One&display=swap' }
    ]
  },
  loading: false,
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/global'
    }
  ],

  serverMiddleware: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        // import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPlus', 'faMinus']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram', 'faDribbble', 'faLinkedin']
        }
      ]
    }]
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },

  styleResources: {
    // your settings here
    scss: [
      '~/assets/scss/*.scss'
    ]
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  env: {
    strapiBaseUri: process.env.API_URL
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
  }
}
