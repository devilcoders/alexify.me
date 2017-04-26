'use strict'

const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const PATHS = {
  entries: `${__dirname}/src/js/`,
  styles: `${__dirname}/src/css/`,
  output: `${__dirname}/dist/`
}

let production = process.env.NODE_ENV === 'production'

let config = {
  entry: {
    'app': [
      PATHS.styles + 'styles.css',
      './src/slim/index.slim'
    ]
  },

  output: {
    path: PATHS.output,
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(slm|slim)$/,
        exclude: /node_modules/,
        use: [
          'html-loader',
          'slm-loader'
        ]
      },
      {
        test: /\.css$/,
        use: production ? ExtractTextPlugin.extract('css-loader!postcss-loader')
                        : ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100
            }
          }, {
            loader: 'img-loader',
            options: {
              progressive: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/slim/index.slim'
    })
  ]
}

if (production) {
  config.plugins.push(
    new ExtractTextPlugin('css/[name]-[chunkhash].css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new CompressionPlugin()
  )
}

module.exports = config
