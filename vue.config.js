module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue_todos" : "/",
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    lintOnSave: false
  }
};
