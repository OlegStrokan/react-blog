import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";
export var buildPlugins = function () {
    return [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new webpack.ProgressPlugin(),
    ];
};
