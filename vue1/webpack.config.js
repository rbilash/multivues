'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolvePath (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js',
  ],
  devServer: {
    hot: true,
    compress: true, // whynot
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
        inject: true,
      }),
  ],
};