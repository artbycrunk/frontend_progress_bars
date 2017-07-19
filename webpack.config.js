var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: "babel-loader" 
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader!postcss-loader')
    }]
  },
  plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
  ]
};