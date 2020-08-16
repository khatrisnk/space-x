import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Button } from './index';

const props = {
    classname: 'xyz',
    queryKey: 'filo',
    evtHandler: jest.fn()
};

const setup = () => {
    act(() => {
        render(<Button {...props}>2003</Button>, container);
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

it('Should render button component', () => {
    setup();
    const button = document.querySelectorAll('.xyz');
    expect(button.length).toBe(1);
    expect(button[0].textContent).toBe('2003');
});

it('Should call evnt handler on click', () => {
    setup();
    const button = document.querySelector('.xyz');
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(props.evtHandler).toHaveBeenCalled();
});

