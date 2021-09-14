const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
require('dotenv').config()

const plugins = []

module.exports = (env = {}, argv) => {
    const isProd = argv.mode === 'production'

    if (isProd) {
        // memo：開発・本番環境でビルドする際に、環境変数を処理するため使用
        plugins.push(
            new webpack.EnvironmentPlugin([
                'NODE_ENV',
            ])
        )
        // memo：ビルド時、Reduxライブラリのグローバス変数を置換するため使用
        // https://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
        plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            })
        )
    } else {
        plugins.push(
            new Dotenv({
                safe: true,
            })
        )
    }

    plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))

    plugins.push(
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        })
    )
    plugins.push(new ForkTsCheckerWebpackPlugin())

    const config = {
        // ブラウザ環境で使用するためwebをtargetとする
        target: 'web',
        // 起点となるTSXファイル（エントリーポイント）
        entry: './src/App/index.tsx',
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
                    // 対象とする拡張子を指定
                    test: /\.svg$/,
                    use: [
                        {
                            // 使用するローダーの指定
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
        resolve: {
            modules: ['node_modules', path.resolve('./src')],
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
            // 対象とする拡張子を指定
            extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'],
        },
        // ビルド後の出力先設定
        output: {
            // 出力先パス
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            // ファイル名
            filename: '[hash].build.js',
        },
        devtool: 'source-map',
        optimization: {
            splitChunks: { cacheGroups: { default: false } },
        },
        plugins: plugins,
        devServer: {
            // 起点となるパス
            static: {
                directory: path.join(__dirname, 'public'),
            },
            hot: 'only',
            host: '0.0.0.0',
            port: process.env.DEV_SERVER_PORT || 3000,
            open: true,
            historyApiFallback: true,

        },
    }
    return config
}
