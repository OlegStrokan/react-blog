import path from "path";
import { buildPlugins } from "./config/build/build.plugins";
import { buildLoaders } from "./config/build/build.loaders";
import { buildResolvers } from "./config/build/build.resolvers";
var config = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        filename: "[name].js [contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    plugins: buildPlugins(),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
};
export default config;
