import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import { createBrowserHistory } from 'history';
import { homeReducer } from './reducers';
//export const history = createBrowserHistory();

// without middleware
// const enhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// with middleware
const composeEnhancers =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;


// Reducers
const rootReducer = combineReducers({
    home: homeReducer,
});

// Store
export const configureStore = (state) => {
    return createStore(
        rootReducer,
        state,
        composeEnhancers(applyMiddleware(thunk))
    );
};
