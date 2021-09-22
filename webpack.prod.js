const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
require('dotenv').config()

// memo：ビルド時、Reduxライブラリのグローバス変数を置換するため使用
// https://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack

module.exports = merge(common,{
    mode: 'production',
    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
    ]
})