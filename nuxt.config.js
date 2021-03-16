const webpack = require('webpack');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Best VPN of 2021  Nord VPN | Surfshark VPN| Express VPN -Fast, Cheap, Safe VPN service',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'thetopVPN  helps you find the best VPN provider of 2021. Honest user & experts reviews on VPNs - speed, price, features. ' },
      { hid: 'keyword', name: 'keyword', content: 'Best VPN of 2021, VPN download, Free VPN'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  analyze: true,
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

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/element-ui', ssr: false },
    { src: '@/plugins/vue-lazyload.js', ssr: false },
    { src: '@/plugins/i18n' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  loading: '~/components/loading.vue',
  //路由配置
  router: {
    prefetchLinks: false,
    middleware: 'i18n'
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
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 7,
        maxSize: 200000,
        cacheGroups: {
          vuetify: {
            test: /node_modules[\\/]vuetify/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          elementui: {
            test: /node_modules[\\/]element-ui/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          vuelazyload: {
            test: /node_modules[\\/]vue-lazyload/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          axios: {
            test: /node_modules[\\/]axios/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          jquery: {
            test: /node_modules[\\/]jquery/,
            chunks: 'all',
            priority: 20,
            name: true
          }

        }
      }
    },
    postcss: {
      plugins: {
        'autoprefixer': true,
        'postcss-px2rem': {
          remUnit: 100
        }
      }
    },
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
    'html.minify': {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: false,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    },
    transpile: [/^element-ui/],
    extractCSS: true
  }
}
