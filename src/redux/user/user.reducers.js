import UserActionTypes from "./user.tyles";

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                currentUser: null
            };
        case UserActionTypes.UPDATE_IMAGE:
            return {
                //currentUser
                ...state,
                currentUser: { ...state.currentUser, image: action.payload.imageUrl, displayName: action.payload.displayName, phone: action.payload.phone }

            }
        default:
            return state;
    }
};

export default userReducer;
