import { createSelector } from 'reselect';

const getSpaceXDataSelector = state => state.home.spaceX.data;

export const getSpaceXAPIState = state => state.home.spaceX.isLoading;

export const spaceXDataSelector = createSelector(
    getSpaceXDataSelector,
    spaceXData => {
        try {
            return spaceXData.map(program => {
                const {
                    flight_number,
                    mission_name,
                    mission_id,
                    launch_year,
                    launch_success,
                    rocket: {
                        first_stage: {
                            cores: landing_info
                        }
                    },
                    links: {
                        mission_patch_small: imgLink
                    }
                } = program;
                return {
                    flightNumber: flight_number,
                    name: mission_name,
                    ids: mission_id,
                    launchYear: launch_year,
                    launchSuccess: launch_success,
                    landingSuccess: landing_info[0].land_success,
                    imgLink
                }
            });
        } catch (err) {
            console.log('spaceXDataSelector', err);
        }
        
    }
);