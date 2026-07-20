import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options;
  return {
    mode: mode,
    // стартовая точка нашего приложения, dirname - папка, в которой мы находимся в данный момент
    // через запятую мы указываем участки пути
    entry: paths.entry,
    // настрока того, куда и как мы будем делать сборку приложения
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      // подчищаем ненужные файлы
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      // конфигурируем лоадеры, они предназначены для того, чтобы обрабатывать файлы, которые выходят за рамки
      // js(png, jpeg, gif, svg, css, scss, ts, ...)
      rules: buildLoaders(),
    },
    resolve: buildResolvers()
  }
}