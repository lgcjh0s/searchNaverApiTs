'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./dist/main.js']
    },
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
        static: './public',
        host: 'localhost',
        port: 8080
    }
};