import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  // стартовая точка нашего приложения, dirname - папка, в которой мы находимся в данный момент
  // через запятую мы указываем участки пути
  entry: path.resolve(__dirname, "src", "index.ts"),
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
  ],
  module: {
    // конфигурируем лоадеры, они предназначены для того, чтобы обрабатывать файлы, которые выходят за рамки
    // js(png, jpeg, gif, svg, css, scss, ts, ...)
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        // исключаем нод модули, их обрабатывать нам не нужно
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // указываем расширение файлов, для которых мы при импорте не будем указывать расширения
    extensions: [".tsx", ".ts", ".js"],
  },
}

export default config;