const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common,{
   mode: 'development',
   devServer: {
        contentBase: './public',
        host: '0.0.0.0',
        port: process.env.DEV_SERVER_PORT || 3000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new Dotenv({
            safe: true,
        })
    ]
})
