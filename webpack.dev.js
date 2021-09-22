const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common,{
   mode: 'development',
   devServer: {
        contentBase: './public',
        host: '0.0.0.0',
        port: process.env.DEV_SERVER_PORT || 3000,
        open: true,
        historyApiFallback: true,
    },
})
