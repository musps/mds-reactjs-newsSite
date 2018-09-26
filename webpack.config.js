const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { 
        from: path.resolve(__dirname, 'www/index.html'),
        to: path.resolve(__dirname, 'build/index.html')
      },
      { 
        from: path.resolve(__dirname, 'www/media'),
        to: path.resolve(__dirname, 'build/media')
      }
    ])
  ],
  devServer: {
    overlay: true,
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    compress: false,
    port: 9010
  }
};
