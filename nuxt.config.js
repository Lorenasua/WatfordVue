export default {
  srcDir: "src",
  modules: [
    'bootstrap-vue/nuxt',
    // '@nuxtjs/gtm',
    // 'nuxt-svg-loader',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // 'vue-scrollto/nuxt'
    // 'vue-social-sharing/nuxt'
  ],
  css: ["bootstrap/dist/css/bootstrap.css", "@/assets/scss/main.scss"],
  styleResources: {
    scss: ['@/assets/scss/base/_globals.scss']
  },
  script: [
    // { src: "jquery/dist/jquery.slim.js" },
    // { src: "popper.js/dist/umd/popper.js" },
    { src: "bootstrap/dist/js/bootstrap.js" },
  ],
  build: {
    extend(config, { isDev, isClient }) {
      // Agrega la regla para archivos Pug
      config.module.rules.push({
        test: /\.pug$/,
        loader: "pug-plain-loader",
        exclude: /node_modules/,
      });
    },
  },
  // ... otras configuraciones
};
