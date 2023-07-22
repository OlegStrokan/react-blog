export var buildLoaders = function () {
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [typescriptLoader];
};
