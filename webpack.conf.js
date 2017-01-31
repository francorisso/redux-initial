const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: Path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        include: [
          Path.resolve(__dirname, 'src'),
        ],
        loader: ExtractTextPlugin.extract([
          'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ]),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      outputs: {
        comments: false,
      }
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
