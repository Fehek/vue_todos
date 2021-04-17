module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    externals:
      process.env.NODE_ENV === 'production'
        ? {
          vue: 'Vue'
        }
        : {}
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    lintOnSave: false
  }
};
