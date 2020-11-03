const webpack = require('webpack');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Best VPN of 2020 Cyberghost VPN | Nord VPN | Express VPN - VPN Collection',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'VPN Collection is the #1 best VPN service provider for you. Unblock Netflix, Hulu and more, access geo blocked websites and app, available on most devices. Enjoy best VPN for free!' },
      { hid: 'keyword', name: 'keyword', content: 'VPN Collection, BEST VPN'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  render: {
      resourceHints: false,
  },
  server: {
    port: '3000', // 配置服务端口号
    host: '127.0.0.1'
  },
  axios: {
    baseURL: 'http://127.0.0.1:3000'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/init.scss'
  ],

 publicRuntimeConfig: {
    axios: {
      browserBaseURL: ''
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: ''
    }
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/element-ui',ssr: true}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  loading: '~/components/loading.vue',
  //路由配置
  router: {
    prefetchLinks: false
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: './assets/css/variables.scss',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['element-ui'],
    postcss: [
      require('postcss-px2rem')({
        remUnit: 100
      })
    ],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    },
    transpile: [/^element-ui/],
    extractCSS: {allChunks: true}
  }
}
