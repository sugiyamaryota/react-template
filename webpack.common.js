const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const Dotenv = require('dotenv-webpack')
require('dotenv').config()

module.exports = {
    // ブラウザ環境で使用するためwebをtargetとする
    target: 'web',
    entry: './src/App/index.tsx',
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
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                loader: 'source-map-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
            },
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
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        }),
        new ForkTsCheckerWebpackPlugin(),
        new Dotenv({
            safe: false
        })
    ]
}
