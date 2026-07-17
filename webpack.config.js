const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  // стартовая точка нашего приложения, dirname - папка, в которой мы находимся в данный момент
  // через запятую мы указываем участки пути
  entry: path.resolve(__dirname, "src", "index.js"),
  // настрока того, куда и как мы будем делать сборку приложения
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    // подчищаем ненужные файлы
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ]
}