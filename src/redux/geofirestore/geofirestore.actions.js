import GeofirestoreActionTypes from "./geofirestore.types";

export const findNearestDrivers = coordinates => ({
    type: GeofirestoreActionTypes.FIND_NEAREST_START,
    payload: coordinates
});

export const findNearestDriversSuccess = drivers => ({
    type: GeofirestoreActionTypes.FIND_NEAREST_SUCCESS,
    payload: drivers
});

export const findNearestDriversFail = error => ({
    type: GeofirestoreActionTypes.FIND_NEAREST_FAIL,
    payload: error
});
