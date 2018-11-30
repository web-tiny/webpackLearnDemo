const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: "./src/index.js",
    another: "./src/another-module.js"
  },
  output: {
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 使用 webpack-dev-middleware
    publicPath: "/"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [
    // 第一问：修改entry文件名，如何才能让index.html引入的js文件名相应的改变，而不是每次都手动改变(html-webpack-plugin)
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    // 第二问：每次bundle前清理dist文件，怎么做？
    new CleanWebpackPlugin(["dist"]),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  /**
   * 第三问：如何追踪bundle中不同js文件的error
   *  使用 source map
   */
  devtool: "inline-source-map",
  /**
   * 第四问：如何自动编译代码？
   * 1: 使用观察者模式,在script脚本文件中添加：{"watch":"webpack --watch"}, npm run watch
   *      缺点是需要刷新浏览器
   * 2：使用 webpack-dev-server
   * 3：使用 webpack-dev-middleware
   */
  // 使用 webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true
  }
  // 第五问：bundle的时候，如何删除没有用到的代码
  /**
   * 第六问：bundle中如何做代码分离
   */
};