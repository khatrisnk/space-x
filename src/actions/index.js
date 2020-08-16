import { getSpaceXData } from '../service';
import {
    LOAD_SPACE_X_DATA_SUCCESS,
    LOAD_SPACE_X_DATA_ERROR,
    LOAD_SPACE_X_DATA_LOADING
} from '../constants';

export const loadSpaceXData = (url) => async (dispatch) => {
    try {
        dispatch(loadSpaceXDataLoading());
        const data = await getSpaceXData(url);
        dispatch(loadSpaceXDataSuccess(data));
    } catch (err) {
        console.log(err)
        dispatch(loadSpaceXDataError(err));
    }
};

export const loadSpaceXDataLoading = () => {
    return {
        type: LOAD_SPACE_X_DATA_LOADING
    };
};

export const loadSpaceXDataSuccess = (res) => {
    return {
        type: LOAD_SPACE_X_DATA_SUCCESS,
        payload: res
    };
};

export const loadSpaceXDataError = (res) => {
    return {
        type: LOAD_SPACE_X_DATA_ERROR,
        payload: res
    };
};
