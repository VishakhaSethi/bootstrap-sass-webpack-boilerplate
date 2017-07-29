const ExtractTextPlugin = require("extract-text-webpack-plugin"),
  ExtractCSS = new ExtractTextPlugin("css/main.css");

module.exports = {
  entry: {
      bundle: [
        './src/app',
      ],
      site: './sass/site.scss'
    },

  output: {
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
    rules: [
      {
          test: /\.scss/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: "css-loader!sass-loader",
          }),
      }
  ],
},
plugins: [
    ExtractCSS
   ]
}
