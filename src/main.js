import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './redux-store';
import App from './client/app';
import './main.scss';

console.log(`Environment is ${process.env.NODE_ENV}`);
const store = configureStore(window.INITIAL_STATE);

const renderReactTree = () => {
    ReactDom.hydrate(
        <Provider store={store}>
            <App />
        </Provider>
        ,
        document.getElementById('app-root')
    );
};
renderReactTree();
