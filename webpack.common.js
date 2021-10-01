const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
require('dotenv').config()

module.exports = {
    // ブラウザ環境で使用するためwebをtargetとする
    target: 'web',
    entry: './src/App/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[hash].build.js',
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: { cacheGroups: { default: false } },
    },
    resolve: {
        modules: ['node_modules', path.resolve('./src')],
        extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-refresh/babel'],
                    }
                },
            },
            /**
             * ToDo:
             * relayを導入してfetchGraphQL.jsを追加した際、source-map-loaderでエラーが出たので一旦コメントアウトしています
             * */
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     enforce: 'pre',
            //     use: [
            //         {
            //             loader: 'source-map-loader',
            //         }
            //     ]
            // },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|woff|woff2|ttf|png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        }),
        new ForkTsCheckerWebpackPlugin(),
    ]
}
