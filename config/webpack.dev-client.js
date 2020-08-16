const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// console.log(exports, require, module, __filename, __dirname);
const config = {
    name: "client",
    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true',
            './src/main.js'
        ]
    },
    mode: 'development',
    target: 'web',
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist',
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: 'source-map',
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
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            hmr: true,
                        }
                    },
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
                                require('postcss-preset-env')()
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
        new ExtractCssChunks({ hot: true }),
        new webpack.HotModuleReplacementPlugin(),

        // To read some webpack config in front end and it tell other vendor library like react, lodash to use production version
        // Hence overall reduce the size of bundle
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                WEBPACK: true
            }

        }),
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true,
        //     openAnalyzer: false // default value is true, making it false will open analyzer windoe at http://localhost:8888
        // })
    ]
};

module.exports = config;