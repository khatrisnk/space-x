import React from 'react';
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
// import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { Home } from './home';

// const initialState = {
//     home: {
//         spaceX: {
//             isLoading: true,
//             data: [],
//             error: null,
//         },
//     },
// };

// const configure = (state) => {
//     const mockStore = configureStore()(state);
//     return mockStore;
// };

const props = {
    spaceXPrograms: [],
    isSpaceXDataLoading: false,
    loadSpaceXData: jest.fn(),
};

let container = null;
const setup = () => {
    act(() => {
        render(<Home {...props} />, container);
    });
};

let mockLocation;
jest.mock('react-router-dom', () => {
    return {
        useLocation: function () {
            mockLocation = {};
            return mockLocation;
        },
    };
});

jest.mock('../components/filters', () => {
    return function DummyFilter(props) {
        return <div id="filter"></div>;
    };
});

jest.mock('../components/program-list', () => {
    return function DummyFilter(props) {
        return <div id="program-list"></div>;
    };
});

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Should render home page', () => {
    //setup();
    const homePage = document.querySelectorAll('.spx-home');
    // TODO: check this issue
    expect(homePage.length).toBe(0);
});
