export default {
  srcDir: "src",
  css: ["bootstrap/dist/css/bootstrap.css"],
  script: [
    { src: "jquery/dist/jquery.slim.js" },
    { src: "popper.js/dist/umd/popper.js" },
    { src: "bootstrap/dist/js/bootstrap.js" },
  ],
  build: {
    extend(config, { isDev, isClient }) {
      // Agrega la regla para archivos Pug
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        exclude: /node_modules/,
      });
    },
  },
  // ... otras configuraciones
};
