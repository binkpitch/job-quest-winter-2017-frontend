const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

const webpackProdConfig = {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}

module.exports = merge(common, webpackProdConfig)
