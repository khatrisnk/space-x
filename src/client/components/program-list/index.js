import React from 'react';
import PropTypes from 'prop-types';
import { Program } from '../program';
import './program-list.scss';

export const ProgramList = ({ programs, isLoading }) => {
    const classname = `${isLoading ? 'spx-prgm-list loading' : 'spx-prgm-list'}`
    return (
        <div className={classname}>
            {
                !isLoading
                    ? programs.map(program => <Program program={program} key={program.flightNumber} />)
                    : 'Loading...'
            }
        </div>
    );
};

ProgramList.propTypes = {
    programs: PropTypes.arrayOf(PropTypes.shape({})),
    isLoading: PropTypes.bool
};