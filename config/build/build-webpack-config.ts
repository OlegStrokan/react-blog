import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./build.loaders";
import { buildPlugins } from "./build.plugins";
import { buildResolvers } from "./build.resolvers";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { paths, mode } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].js [contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
