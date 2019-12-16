const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/components/' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, './md-loader/index.js')
            }
          ]
        }
      ]
    },
    plugins: [
      // new VueLoaderPlugin(),
      new webpack.LoaderOptionsPlugin({
        vue: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      })
    ]
  }
}
