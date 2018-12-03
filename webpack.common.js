const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ['lodash']
    // another: "./src/another-module.js"
  },
  output: {
    // filename: "[name].bundle.js",
    filename: "[name].[contenthash].js", // cach
    // chunkFilename: '[name].bundle.js',
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
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?this=>window'
      },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: "production"
      title: "caching"
    }),
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextPlugin("style.css"),

    // webpack.optimize.CommonsChunkPlugin has been removed,
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "manifest"
    // })
    // 通过模块标识符的方式，让提取的第三方库的hash值保持不变
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({
      // _:'lodash',
      join: ['lodash','join'] // 指定加载库中的某个方法，移除其他没用到的
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test:/[\\/]node_modules[\\/]]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        }
      }
    }
  }

};