import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var buildLoaders = function (options) {
    var cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
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
