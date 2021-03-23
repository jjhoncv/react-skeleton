const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  dotenvOverride,
  createVarsDefinePlugin
} = require('./utils');

const rootPath = path.join(__dirname, '../../')

dotenvOverride();

const publicPath = process.env.PATH_STATIC + '/';

module.exports = {
  devtool: 'source-map',
  entry: path.join(rootPath, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(rootPath, 'dist'),
    filename: '[name].js',
    publicPath
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'public/index.html'),
    }),
  ]
};