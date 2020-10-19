const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devServer: {
    proxy: {
      '/measurements': 'http://localhost:3000'
    }
  },
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: false,
    })],
  },
  output: {
    filename: 'perfAnalytics.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'PerfAnalytics'
  },
};