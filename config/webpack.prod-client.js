const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BrotliWebpackPlugin = require('brotli-webpack-plugin');

// console.log(exports, require, module, __filename, __dirname);
const config = {
    name: "client",
    entry: {
        main: './src/main.js'
    },
    mode: 'production',
    target: 'web',
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    optimization: {
        runtimeChunk: {
            name: "bootstrap"
        },
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: ExtractCssChunks.loader },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-preset-env')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractCssChunks(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
                WEBPACK: true
            }
        }),
        new BabelMinifyWebpackPlugin(),
        new CompressionWebpackPlugin({
            algorithm: 'gzip'
        }),
        new BrotliWebpackPlugin()
    ]
};

module.exports = config;