// var webpack = require('webpack');
var path = require('path');
var projectDir = path.resolve(__dirname, '..');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  context: projectDir,
  entry: './src/client.js',
  output: {
    path: path.resolve(projectDir, 'build/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  module: {
    rules: [
      // Javascript
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      // Images
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5120,
              fallBack: 'file-loader',
            },
          },
        ],
      },
      // SVG
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-react-loader',
          }
        ]
      }
      // TODO Fonts
      // CSS/SASS/LESS? Nope!
    ]
  },
  resolve: {
    alias: {
      // Use hot-loader injected react-dom
      'react-dom': '@hot-loader/react-dom',
      // Source file aliases
      'api': path.resolve(__dirname,'../src/api'),
      'components': path.resolve(__dirname,'../src/components'),
      'pages': path.resolve(__dirname,'../src/pages'),
      'state': path.resolve(__dirname,'../src/state'),
    },
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // TODO
    // new webpack.DefinePlugin({
    //   // ENV vars
    // })
  ],
}