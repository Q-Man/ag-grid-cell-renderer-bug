var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, './dist');
var srcPath = path.resolve(__dirname, './src');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {
    mode: "none",
    entry: "./src/app/index.jsx",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        //Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, "./src")),
    ],
    output: {
        path: buildPath,    //Path of output file
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                use: 'babel-loader',
                include: [srcPath],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
};

module.exports = config;
