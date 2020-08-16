import {
    LOAD_SPACE_X_DATA_SUCCESS,
    LOAD_SPACE_X_DATA_ERROR,
    LOAD_SPACE_X_DATA_LOADING
} from '../constants';

const initialState = {
    spaceX: {
        isLoading: true,
        data: [],
        error: null
    }
};
export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPACE_X_DATA_SUCCESS:
            return {
                ...state,
                spaceX: {
                    ...state.spaceX,
                    data: action.payload,
                    isLoading: false
                }
            };
        case LOAD_SPACE_X_DATA_ERROR:
            return {
                ...state,
                spaceX: {
                    ...state.spaceX,
                    error: action.payload,
                    isLoading: true
                }
            };
        case LOAD_SPACE_X_DATA_LOADING:
            return {
                ...state,
                spaceX: {
                    ...state.isLoading,
                    isLoading: true
                }
            }
        default:
            return state;
    }
};