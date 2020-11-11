import { createSelector } from "reselect";

const selectGeofirestore = state => state.geofirestore;

export const selectDrivers = createSelector(
    [selectGeofirestore],
    geofirestore => geofirestore.drivers
);
