const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackCommonConfig = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
    './src/index.css'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
         { loader: 'url-loader', options: { limit: 8192 } }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = webpackCommonConfig
