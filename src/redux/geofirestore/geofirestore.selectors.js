import { createSelector } from "reselect";

const selectGeofirestore = state => state.geofirestore;

export const selectDrivers = createSelector(
    [selectGeofirestore],
    geofirestore => geofirestore.drivers
);

export const selectPreSize = createSelector(
    [selectGeofirestore],
    geofirestore => geofirestore.preSize
);

export const selectPreRadius = createSelector(
    [selectGeofirestore],
    geofirestore => geofirestore.preRadius
);

export const selectPreList = createSelector(
    [selectGeofirestore],
    geofirestore => geofirestore.preList
);
