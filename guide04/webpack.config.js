var path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: [path.resolve(__dirname, 'app/main.js'),
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080/'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: "babel",
          },
          {
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            loader: 'babel', // The module to load. "babel" is short for "babel-loader"
            query:
            {
              presets:['es2015', 'react']
            }
        }]
    }
};
