const webpackConfig = require('./webpack.config.js')

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || 
      }
    }
  })
}