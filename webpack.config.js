const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, './src/'),
    entry: {
        ui: ['./css/style.less', './js/app.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: './js/aap.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: '../'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html',
                inject: 'head',
            }
        ),
        new ExtractTextPlugin('./css/style.css'),
        new UglifyJsPlugin()
    ]
}