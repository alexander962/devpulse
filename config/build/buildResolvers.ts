import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    // указываем расширение файлов, для которых мы при импорте не будем указывать расширения
    extensions: [".tsx", ".ts", ".js"],
  }
}