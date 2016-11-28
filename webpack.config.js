"use strict";

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const immutableCss      = require('immutable-css')
const postcssImport     = require('postcss-import')
const reporter          = require('postcss-reporter')
const media             = require('postcss-custom-media')
const queries           = require('css-mqpacker')
const vars              = require('postcss-css-variables')
const conditionals      = require('postcss-conditionals')

const PATHS = {
  entries: __dirname + '/src/js/',
  styles: __dirname + '/src/css/',
  output: __dirname + '/dist/'
}

let production = process.env.NODE_ENV === 'production';

const postPluginsProd = [
  vars, conditionals, media, queries
];

const postPluginsDev = [
  ...postPluginsProd, immutableCss, reporter
];

let postPlugins = production ? postPluginsProd : postPluginsDev;

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
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(slm|slim)$/,
        exclude: /node_modules/,
        loader: 'html!slm'
      },
      {
        test: /\.css$/,
        loader: production ? ExtractTextPlugin.extract('css!postcss') : 'style!css!postcss'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=1000!img?progressive=true'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/slim/index.slim'
    })
  ],

  postcss: function (webpack) {
    return [
      postcssImport({
          addDependencyTo: webpack
      }), ...postPlugins
    ]
  }
};

if (production) {
  config.plugins.push(
    new ExtractTextPlugin('css/[name]-[chunkhash].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CompressionPlugin()
  )
}

module.exports = config;

