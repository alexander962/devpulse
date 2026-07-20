import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    // исключаем нод модули, их обрабатывать нам не нужно
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
  ]
}