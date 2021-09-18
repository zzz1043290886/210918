// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variables.scss";'
      },
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 192 // 如果设计稿是1920 这里就是192
          })
        ]
      }
    }
  }
}
