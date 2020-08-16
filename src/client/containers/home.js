import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadSpaceXData } from '../../actions';
import { Filters, ProgramList } from '../components';
import { spaceXDataSelector, getSpaceXAPIState } from '../selectors';
import { getAPIUrl } from '../../util';
import './home.scss';

export const Home = (props) => {
    const { spaceXPrograms, isSpaceXDataLoading } = props;
    const location = useLocation();
    useEffect(() => {
        props.loadSpaceXData();
    }, []);

    useEffect(() => {
        const updatedUrl = getAPIUrl(location.search);
        props.loadSpaceXData(updatedUrl);
    }, [location.search]);

    return (
        <main className="spx-home">
            <h1>SpaceX Launch Programs</h1>
            <div className="spx-home-container">
                <Filters />
                <ProgramList programs={spaceXPrograms} isLoading={isSpaceXDataLoading} />
            </div>
        </main>
    );
};

Home.defaulProps = {
    spaceXPrograms: []
}

Home.propTypes = {
    loadSpaceXData: PropTypes.func,
    spaceXPrograms: PropTypes.arrayOf(PropTypes.shape({})),
    isSpaceXDataLoading: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        isSpaceXDataLoading: getSpaceXAPIState(state),
        spaceXPrograms: spaceXDataSelector(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadSpaceXData: (url) => dispatch(loadSpaceXData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
