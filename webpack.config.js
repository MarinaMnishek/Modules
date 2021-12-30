const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")

const isDev = process.env.NODE_ENV === 'develpment'
const isProd = !isDev

const optimization = () => {
  let config={}
  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
  return config
}


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  // entry: './js/index.js',
  entry: {
    main:['@babel/polyfill', './js/index.js']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/files'),
          to: path.resolve(__dirname, 'dist/files')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif|mp3)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}