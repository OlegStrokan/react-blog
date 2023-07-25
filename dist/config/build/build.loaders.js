import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var buildLoaders = function (options) {
    var isDev = options.isDev;
    var cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: function (resPath) { return Boolean(resPath.includes(".module.")); },
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:6]",
                    },
                },
            },
            "sass-loader",
        ],
    };
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [typescriptLoader, cssLoader];
};
