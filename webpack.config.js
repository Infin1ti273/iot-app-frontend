'use strict';
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

//将项目所需的Js文件转译并打包
const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};

//装载html并打包
const htmlLoader = {
    test: /\.html$/,
    use: {
        loader: "html-loader"
    }
};

//装载css文件并打包
const cssLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

//装载其他文件
const fileLoader = {
    loader: require.resolve('file-loader'),
    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.css$/],
    options: {
        name: '[name].[hash:8].[ext]',
    },
};

module.exports = {
    //代码入口
    entry:'./src/index.js',
    //输出文件
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: "chunk.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".js"]
    },
    module: {
        //设置loader
        rules: [
            babelLoader,
            htmlLoader,
            cssLoader,
            fileLoader
        ]
    },
    //打包html
    plugins: [
        new HtmlWebPackPlugin({
            template: "./html/index.html",
            filename: "main.html"
        })
    ],
    //配置开发服务器
    devServer: {
        hot: true,
        contentBase: './lib',
        compress: true,
        port: 5020,
        open: true,
    },
    //优化
    optimization: {
        minimizer: [
            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                    test: /\.(js|jsx|ts|tsx)$/,
                }).apply(compiler);
            }
        ],
    }
};


