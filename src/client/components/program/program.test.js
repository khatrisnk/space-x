import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Program } from './index';

const props = {
    program: {
        flightNumber: 1,
        name: 'spx_123',
        ids: ['1'],
        launchYear: '2020',
        launchSuccess: true,
        landingSuccess: false,
        imgLink: 'https://ssdccsd/dsfsd.png'
    }
};

const setup = () => {
    act(() => {
        render(<Program {...props} />, container);
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

it('Should render program with given data', () => {
    setup();
    const image = document.querySelector('img');
    expect(image.getAttribute('src')).toBe(props.program.imgLink);

    const name = document.querySelector('.scx-prgm__name');
    expect(name.textContent).toBe('spx_123 #1');

    const ids = document.querySelector('.spx-prgm__mission-ids');
    expect(ids.textContent).toBe('Mission Ids: 1');

    const year = document.querySelector('.spx-prgm__launch-year');
    expect(year.textContent).toBe('Launch Year: 2020');

    const launch = document.querySelector('.spx-prgm__launch-suc');
    expect(launch.textContent).toBe('Successful Launch: true');

    const land = document.querySelector('.spx-prgm__land-suc');
    expect(land.textContent).toBe('Successful Landing: false');
});