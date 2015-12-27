var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: 'dist', 
    hash: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
        title: 'React Typescript Webpack Starter',
        template: './src/index.html', 
        inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}