// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const ASSET_PATH = production ? '/' : 'auto';
// const HINTS = production ?  : 'error';

module.exports = {
  performance: {
    hints: 'warning',
  },
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: ASSET_PATH,
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: !production,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !production,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new NodePolyfillPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        extractComments: false,
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          // Implementation
          implementation: ImageMinimizerPlugin.imageminMinify,
          // Options
          options: {
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              'imagemin-svgo',
            ],
          },
        },
      }),
    ],
  },
  devServer: {
    compress: true,
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  mode: production ? 'production' : 'development',
};
