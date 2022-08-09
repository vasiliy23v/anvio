const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  }
};

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  entry: {
    'main': "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'tags.html',
      template: 'src/pages/tags.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/pages/about.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'tags2.html',
      template: 'src/pages/tags2.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'article.html',
      template: 'src/pages/article.html',
      chunks: ['main']
    }),
    new MiniCssExtractPlugin({
      filename: 'src/styles/main.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  ...devServer(develop),
});