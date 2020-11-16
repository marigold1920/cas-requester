import RequestActionTypes from "./request.types";

const INITIAL_STATE = {
    currentRequest: null,
    error: null,
    pickUp: null,
    destination: null,
    poolId: null
};

const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RequestActionTypes.SAVE_REQUEST_SUCCESS:
            return {
                ...state,
                currentRequest: { requestId: action.payload.requestId },
                pickUp: action.payload.pickUp,
                destination: action.payload.destination
            };
        case RequestActionTypes.SAVE_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case RequestActionTypes.FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                currentRequest: action.payload
            };
        case RequestActionTypes.FETCH_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case RequestActionTypes.FEEDBACK_REQUEST_SUCCESS:
        case RequestActionTypes.CLEAR_REQUEST:
        case RequestActionTypes.CANCEL_REQUEST_SUCCESS:
            return {
                ...state,
                currentRequest: null,
                error: null,
                pickUp: null,
                destination: null
            };
        case RequestActionTypes.FEEDBACK_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case RequestActionTypes.SYNC_POOL_DATA:
            return {
                ...state,
                poolId: action.payload
            };
        case RequestActionTypes.CANCEL_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload,
                currentRequest: null,
                error: null,
                pickUp: null,
                destination: null
            };
        default:
            return state;
    }
};

export default requestReducer;
