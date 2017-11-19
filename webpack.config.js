const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "public/stylesheets/any-wizard.css",
  disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: "./src/any-wizard.js",
  
  output: {
    filename: "./public/javascript/any-wizard.js"
  },
  
  watch: true,
  
  module: {
    rules: [{
      test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true
            }
          }, {
            loader: "sass-loader"
          }]
        })
    }]
  },
  plugins: [
    extractSass
  ]
}