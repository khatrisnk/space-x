const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('./node-externals');

// console.log(exports, require, module, __filename, __dirname);

const config = {
    name: "server",
    entry: './src/server/render.js',
    mode: 'production',
    output: {
        filename: 'server-bundle.js',
        path: path.resolve(__dirname, '../build'),
        libraryTarget: "commonjs2"
    },
    target: 'node',
    externals: nodeExternals,
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
                            name: '/images/[name].[ext]',
                            emitFile: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
                WEBPACK: true
            }
        })
    ]
};

module.exports = config;