 const path = require("path")
 const HTMLWebpackPlugin = require('html-webpack-plugin')
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 
 module.exports = {
    mode: 'development',
    entry: {
        main: "./src/index.js",
        copy: "./src/indexcopy.js",
        getindex: "./src/getIndex.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Functions",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]

 }