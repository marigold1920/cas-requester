import UserActionTypes from "./user.tyles";

const INITIAL_STATE = {
    currentUser: {
        displayName: "Hữu Công",
        image: "https://i.ibb.co/3YCfN9p/person-3.jpg"
    }
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
        default:
            return state;
    }
};

export default userReducer;
