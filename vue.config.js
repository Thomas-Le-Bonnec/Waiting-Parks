//const { defineConfig } = require('@vue/cli-service')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/waiting-parks/'
      : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    transpileDependencies: true
}

/*
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Waiting-Parks/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://queue-times.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
<<<<<<< Updated upstream

/*
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Waiting-Parks/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
})
=======
>>>>>>> Stashed changes
*/
