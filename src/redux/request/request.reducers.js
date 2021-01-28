import RequestActionTypes from "./request.types";

const INITIAL_STATE = {
    currentRequest: null,
    error: null,
    pickUp: null,
    destination: null,
    poolId: null,
    config: null,
    isOthers: false
};

const mapKey = {
    1: "requestTimeout",
    2: "termTimeout",
    3: "radius",
    4: "extraRadius",
    5: "maxRadius"
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
        case RequestActionTypes.SET_REQUEST_TYPE:
            return {
                ...state,
                isOthers: action.payload
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
        case RequestActionTypes.CLEAN_UP:
        case RequestActionTypes.REJECTED_REQUEST_SUCCESS:
            return {
                ...state,
                currentRequest: null,
                error: null,
                pickUp: null,
                destination: null,
                poolId: null
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
        case RequestActionTypes.FETCH_CONFIG_SUCCESS:
            return {
                ...state,
                config: action.payload.reduce((acc, cur) => {
                    return {
                        ...acc,
                        [mapKey[cur.itemId]]: cur.value
                    };
                }, {})
            };
        case RequestActionTypes.CANCEL_REQUEST_FAIL:
        case RequestActionTypes.REJECTED_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default requestReducer;
