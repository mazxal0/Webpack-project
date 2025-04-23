import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: {
      RANDOM: paths.entry,
    },
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolve()
  }
}
