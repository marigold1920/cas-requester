import UserActionTypes from "./user.tyles";

const INITIAL_STATE = {
    currentUser: null,
    healthInformation: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                healthInformation: action.payload.healthInformation
            };
        case UserActionTypes.SIGNIN_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                currentUser: null
            };
        case UserActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    image: action.payload.imageUrl,
                    displayName: action.payload.displayName,
                    phone: action.payload.phone
                }
            };
        case UserActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                healthInformation: action.payload
            };
        case UserActionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
