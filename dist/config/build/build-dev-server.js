export var buildDevServer = function (options) {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    };
};
