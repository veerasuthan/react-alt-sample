const path = require('path');
var config = {
   entry: './app/main.js',
   devtool: "inline-source-map",
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   resolve: {
     extensions: ['.js', '.jsx']
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   }
}

module.exports = config;
