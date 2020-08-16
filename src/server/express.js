import express from 'express';
import expressStaticGzip from 'express-static-gzip';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import wpDevConfigClient from '../../config/webpack.dev-client';
import wpDevConfigServer from '../../config/webpack.dev-server';
import wpProdConfigClient from '../../config/webpack.prod-client';
import wpProdConfigServer from '../../config/webpack.prod-server';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
console.log(`Environment is ${process.env.NODE_ENV}`);

const PORT = process.env.PORT || 8080;
let isBuilt = false

const done = () => {
    if (isBuilt) return
    app.listen(PORT, () => {
        isBuilt = true
        console.log(
            `Server listening on http://*.local:${PORT} in ${process.env.NODE_ENV}`
        )
    })
};

if (!isProduction) {
    const compiler = webpack([wpDevConfigClient, wpDevConfigServer]);
    const clientCompiler = compiler.compilers[0];
    /**
     * For benefit of wev pack dev server in node server
     */

    // For auto build
    app.use(webpackDevMiddleware(compiler, wpDevConfigClient.devServer));

    // For hot reloading
    app.use(webpackHotMiddleware(clientCompiler, wpDevConfigClient.devServer));

    app.use(webpackHotServerMiddleware(compiler));
    done();
} else {
    webpack([wpProdConfigClient, wpProdConfigServer]).run((err, stats) => {
        const clientStats = stats.toJson().children[0];
        const render = require('../../build/server-bundle.js').default;
        // const staticMW = express.static(path.resolve(__dirname, '../../dist'));
        const staticMW = expressStaticGzip('dist', {
            brotli: true,
        });
        app.use(staticMW);
        app.use(render({ clientStats }));
        done();
    });
}
