import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
    const { classname, queryKey, children, evtHandler } = props
    return (
        <button className={classname} onClick={e => evtHandler(e, queryKey)}>
            {children}
        </button>
    );
};

Button.propTypes = {
    classname: PropTypes.string,
    queryKey: PropTypes.string,
    children: PropTypes.node,
    evtHandler: PropTypes.func
};