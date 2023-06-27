const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
  publicPath: '/apps/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  }
}
