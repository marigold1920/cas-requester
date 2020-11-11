import { create } from "react-native-extended-stylesheet";
import { createSelector } from "reselect";

const selectRequest = state => state.request;

export const selectRequestId = createSelector(
    [selectRequest],
    request => request.currentRequest && request.currentRequest.requestId
);

export const selectCurrentRequest = createSelector(
    [selectRequest],
    request => request.currentRequest
);

export const selectPickUp = createSelector([selectRequest], request => request.pickUp);

export const selectDestination = createSelector([selectRequest], request => request.destination);

export const selectPoolId = createSelector([selectRequest], request => request.poolId);
