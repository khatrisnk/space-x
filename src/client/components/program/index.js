import React from 'react';
import PropTypes from 'prop-types';
import './program.scss';

export const Program = ({ program }) => {
    return (
        <div className="scx-prgm" tabIndex="0">
            <div className="scx-prgm__img">
                <img src={program.imgLink} />
            </div>
            <div className="scx-prgm__name">
                <span>{program.name}</span>
                <span>{` #${program.flightNumber}`}</span>
            </div>
            <div className="spx-prgm__mission-ids">
                <label>Mission Ids: </label>
                <div>
                    <ul>
                        {program.ids.map((id) => (
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="spx-prgm__launch-year">
                <label>Launch Year: </label>
                <span>{program.launchYear}</span>
            </div>
            <div className="spx-prgm__launch-suc">
                <label>Successful Launch: </label>
                <span>
                    {Boolean(program.launchSuccess).toString()}
                </span>
            </div>
            <div className="spx-prgm__land-suc">
                <label>Successful Landing: </label>
                <span>
                    {Boolean(program.landingSuccess).toString()}
                </span>
            </div>
        </div>
    );
};

Program.propTypes = {
    program: PropTypes.shape({
        imgLink: PropTypes.string,
        flightNumber: PropTypes.number,
        name: PropTypes.string,
        ids: PropTypes.arrayOf(PropTypes.string),
        launchYear: PropTypes.string,
        launchSuccess: PropTypes.bool,
        landingSuccess: PropTypes.bool
    })
};
