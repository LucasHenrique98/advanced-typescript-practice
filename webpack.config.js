const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { extensions: ['.ts'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  devtool: 'source-map',
};
