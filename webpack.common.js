const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
    // another: "./src/another-module.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        include: [resolve('src'),resolve('test')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "production"
    }),
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextPlugin("style.css")
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};