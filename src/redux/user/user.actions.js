import UserActionTypes from "./user.tyles";

export const signIn = user => ({
    type: UserActionTypes.SIGNIN_START,
    payload: user
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signInFail = error => ({
    type: UserActionTypes.SIGNIN_FAIL,
    payload: error
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT
});

export const updateUser = user => ({
    type: UserActionTypes.UPDATE_USER,
    payload: user
});
