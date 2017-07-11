// webpack.config.js
var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: './frontend/todo_redux.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx', '*']
  }
};
