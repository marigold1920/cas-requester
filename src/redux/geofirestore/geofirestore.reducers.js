import GeofirestoreActionTypes from "./geofirestore.types";

const INITIAL_STATE = {
    drivers: [],
    preList: [],
    preSize: 0,
    preRadius: 0,
    error: null
};

const geofirestoreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GeofirestoreActionTypes.FIND_NEAREST_SUCCESS: {
            const { radius, drivers, extraRadius } = action.payload;
            return {
                ...state,
                preList: state.drivers,
                preRadius: radius + (drivers.length <= state.preSize ? extraRadius : 0),
                preSize: drivers.length,
                drivers: drivers
            };
        }
        case GeofirestoreActionTypes.FIND_NEAREST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case GeofirestoreActionTypes.SAVE_NEAREST_DRIVERS:
            return {
                ...state,
                drivers: action.payload
            };
        case GeofirestoreActionTypes.CLEAR_DRIVERS:
            return {
                ...state,
                drivers: [],
                preList: [],
                preSize: 0,
                preRadius: 0
            };
        default:
            return state;
    }
};

export default geofirestoreReducer;
