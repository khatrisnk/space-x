import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ProgramList } from './index';

const props = {
    programs: [
        { flightNumber: 1, ids: ['2'] },
        { flightNumber: 2, ids: ['3']}
    ],
    isLoading: false
};

const setup = () => {
    act(() => {
        render(<ProgramList {...props} />, container);
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

it('Should render loading text', () => {
    props.isLoading = true;
    setup();
    const prgmList = document.querySelector('.spx-prgm-list');
    expect(prgmList.getAttribute('class').includes('loading')).toBeTruthy();
    props.isLoading = false;
});

it('Should render program list', () => {
    setup();
    const prgmList = document.querySelector('.spx-prgm-list');
    expect(prgmList.getAttribute('class').includes('loading')).toBeFalsy();
});