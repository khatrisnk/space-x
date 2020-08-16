import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Filters } from './index';

let mockHistory;
jest.mock('react-router-dom', () => {
    return {
        useHistory: function () {
            mockHistory = {
                push: jest.fn()
            };
            return mockHistory;
        },
    };
});

jest.mock('../../../util', () => {
    return {
        useQuery: function () { return {} },
        getUpdatedUrlInfo: function () {
            return {
                url: '/xyz',
                replace: false
            }
        }
    }
});

const setup = () => {
    act(() => {
        render(<Filters />, container);
    });
};

let container = null;

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

it('Should render filters', () => {
    setup();
    const filters = document.querySelectorAll('.spx-filters');
    expect(filters.length).toBeGreaterThan(0);
});