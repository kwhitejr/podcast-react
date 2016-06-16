var webpack = require('webpack');
// var path = require('path');

// var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');
// var STYLES_DIR = path.resolve(__dirname, 'src/client/styles');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  externals: {
    "jquery": "jQuery",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-bootstrap": "ReactBootstrap"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude : /node_modules/,
        loader : 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};