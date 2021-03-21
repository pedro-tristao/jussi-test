const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: '/src/js',
    output: {
        filename: 'js/jussi-test.main.min.js',
        publicPath: '/dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'

                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    filename: 'img/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'html/jussi-test.main.html',
            template: './src/html/index.html',
            minify : false,
            inject: 'body',
            scriptLoading: 'defer'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/jussi-test.main.css',
        }),
        new RemovePlugin({
            before: {
                include: [
                    'dist'
                ]
            },
            watch: {
                include: [
                    'dist/js/jussi-test.main.min.js.LICENSE.txt'
                ]
            },
            after: {
                include: [
                    'dist/js/jussi-test.main.min.js.LICENSE.txt'
                ]
            }
        })
    ],
    devServer: {
        open: true,
        watchOptions:{
            poll: true,
            ignored: "/node_modules/"
        }
    }
}
