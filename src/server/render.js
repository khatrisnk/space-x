import React from 'react';
import { renderToString } from 'react-dom/server';
import { clearChunks, flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import { configureStore } from '../redux-store';
import { loadSpaceXData } from '../actions';
import Routes from '../client/routes';

const store = configureStore();

export default ({ clientStats }) => (req, res) => {
    const getSpaceXData = () => {
        return store.dispatch(loadSpaceXData());
    };
    const app = () =>
        renderToString(
            <Provider store={store}>
                <StaticRouter location={req.originalUrl} context={{}}>
                    <Routes />
                </StaticRouter>
            </Provider>
        );

    const template = () => {
        clearChunks();
        const { js, styles, cssHash } = flushChunks(clientStats, {
            chunkNames: flushChunkNames(),
        });
        return `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>SapceX</title>
                    ${styles}
                </head>
                <body>
                    <div id="app-root">${app()}</div>
                    ${cssHash}
                    ${js}
                    <script>
                        window.INITIAL_STATE = ${JSON.stringify(
                            store.getState()
                        )}
                    </script>
                </body>
            </html>
        `;
    };
    console.log(req.path);
    if (req.path === '/home' || req.path === '/index.html') {
        getSpaceXData().then(() => {
            res.status(200).send(template());
        });
    } else {
        res.status(200).send(template());
    }
};
