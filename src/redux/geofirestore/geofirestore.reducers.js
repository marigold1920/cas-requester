import GeofirestoreActionTypes from "./geofirestore.types";

const INITIAL_STATE = {
    drivers: [],
    error: null
};

const geofirestoreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GeofirestoreActionTypes.FIND_NEAREST_SUCCESS:
            return {
                ...state,
                drivers: action.payload
            };
        case GeofirestoreActionTypes.FIND_NEAREST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default geofirestoreReducer;
