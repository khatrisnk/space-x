import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const App = () => {
    return (
        <BrowserRouter history={customHistory}>
            <Routes />
        </BrowserRouter>
    )
};

export default App;
