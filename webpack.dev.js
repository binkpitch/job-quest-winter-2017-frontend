const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

const webpackDevConfig = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common, webpackDevConfig)
