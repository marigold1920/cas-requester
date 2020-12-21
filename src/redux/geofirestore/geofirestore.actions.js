import GeofirestoreActionTypes from "./geofirestore.types";

export const findNearestDrivers = (latitude, longitude, radius, numOfDrivers, extraRadius) => ({
    type: GeofirestoreActionTypes.FIND_NEAREST_START,
    payload: { latitude, longitude, radius, numOfDrivers, extraRadius }
});

export const findNearestDriversSuccess = (drivers, radius, extraRadius) => ({
    type: GeofirestoreActionTypes.FIND_NEAREST_SUCCESS,
    payload: { drivers, radius, extraRadius }
});

export const findNearestDriversFail = error => ({
    type: GeofirestoreActionTypes.FIND_NEAREST_FAIL,
    payload: error
});

export const clearDrivers = () => ({
    type: GeofirestoreActionTypes.CLEAR_DRIVERS
});
