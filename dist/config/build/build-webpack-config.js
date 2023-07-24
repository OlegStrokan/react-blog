import { buildLoaders } from "./build.loaders";
import { buildPlugins } from "./build.plugins";
import { buildResolvers } from "./build.resolvers";
import { buildDevServer } from "./build-dev-server";
export var buildWebpackConfig = function (options) {
    var paths = options.paths, mode = options.mode, isDev = options.isDev;
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
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
