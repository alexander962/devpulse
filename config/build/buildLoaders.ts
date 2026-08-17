import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  // Если не используем ts - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    // исключаем нод модули, их обрабатывать нам не нужно
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    scssLoader,
  ]
}