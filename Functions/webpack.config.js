 const path = require("path");
 const HTMLWebpackPlugin = require('html-webpack-plugin');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 //const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
 
 module.exports = {
    mode: 'development',

    entry: {
        main: "./src/index.jsx"
    },
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    
    devtool: 'source-map',

    devServer: {
        port: 3000
    },

    resolve: {
        extensions: ['.js', '.jsx'], // чтобы не прописывать расширения при импорте компонентов
      },

    module: { // импорт стилей npm install -D style-loader css-loader less-loader
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|svg|png)/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-react", '@babel/preset-env']
                  }
                }
            }
        ]

    }
 }

 if (process.env.SERVE) { // Используем плагин только если запускаем devServer
    plugins.push(new ReactRefreshWebpackPlugin());
  }