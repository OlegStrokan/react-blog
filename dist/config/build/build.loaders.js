import MiniCssExtractPlugin from "mini-css-extract-plugin";
export cosnt buildLoaders = function (options) {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']

    }
    const isDev = options.isDev;
    const cssLoader = {
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

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const 
    return [typescriptLoader, cssLoader];
};
