const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',        
    // サーバー
    devServer: {
        contentBase: `${__dirname}/../build/`,
        publicPath: '/',
        historyApiFallback: true,
        watchContentBase: true,
        host: "0.0.0.0",
        port: 3035
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

