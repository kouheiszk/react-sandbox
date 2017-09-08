const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(path.join(__dirname, 'app')),
  entry: [
    './index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, 'public', 'packs')),
    publicPath: '/packs'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react',
            ['env', { modules: false }],
            'stage-0'
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin([ 'NODE_ENV' ]),
  ],

  devtool: 'cheap-eval-source-map',

  devServer: {
    https: false,
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.resolve(path.join(__dirname, 'public')),
    publicPath: '/packs',
    watchOptions: {
      ignored: /node_modules/
    }
  }
}
