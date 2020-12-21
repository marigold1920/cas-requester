import RequestActionTypes from "./request.types";

export const saveRequest = (token, request, pickUp, destination) => ({
    type: RequestActionTypes.SAVE_REQUEST_START,
    payload: {
        token,
        request,
        pickUp,
        destination
    }
});

export const saveRequestSuccess = request => ({
    type: RequestActionTypes.SAVE_REQUEST_SUCCESS,
    payload: request
});

export const saveRequestFail = error => ({
    type: RequestActionTypes.SAVE_REQUEST_FAIL,
    payload: error
});

export const fetchRequest = (token, requestId) => ({
    type: RequestActionTypes.FETCH_REQUEST_START,
    payload: { token, requestId }
});

export const fetchRequestSuccess = request => ({
    type: RequestActionTypes.FETCH_REQUEST_SUCCESS,
    payload: request
});

export const fetchRequestFail = error => ({
    type: RequestActionTypes.FETCH_REQUEST_FAIL,
    payload: error
});

export const feedbackRequest = (token, requestId, feedback) => ({
    type: RequestActionTypes.FEEDBACK_REQUEST_START,
    payload: { token, requestId, feedback }
});

export const feedbackRequestSuccess = () => ({
    type: RequestActionTypes.FEEDBACK_REQUEST_SUCCESS
});

export const feedbackRequestFail = error => ({
    type: RequestActionTypes.FEEDBACK_REQUEST_FAIL,
    payload: error
});

export const syncPoolData = poolId => ({
    type: RequestActionTypes.SYNC_POOL_DATA,
    payload: poolId
});

export const clearRequest = () => ({
    type: RequestActionTypes.CLEAR_REQUEST
});

export const cancelRequest = (token, requestId) => ({
    type: RequestActionTypes.CANCEL_REQUEST_START,
    payload: { token, requestId }
});

export const cancelRequestSuccess = () => ({
    type: RequestActionTypes.CANCEL_REQUEST_SUCCESS
});

export const cancelRequestFail = error => ({
    type: RequestActionTypes.CANCEL_REQUEST_FAIL,
    payload: error
});

export const fetchConfig = token => ({
    type: RequestActionTypes.FETCH_CONFIG_START,
    payload: token
});

export const fetchConfigSuccess = config => ({
    type: RequestActionTypes.FETCH_CONFIG_SUCCESS,
    payload: config
});

export const fetchConfigFail = error => ({
    type: RequestActionTypes.FETCH_CONFIG_FAIL,
    payload: error
});

export const cleanUp = () => ({
    type: RequestActionTypes.CLEAN_UP
});

export const setRequestType = isOthers => ({
    type: RequestActionTypes.SET_REQUEST_TYPE,
    payload: isOthers
});
