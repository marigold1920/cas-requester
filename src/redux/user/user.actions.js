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

export const updateUser = (userId, token, user) => ({
    type: UserActionTypes.UPDATE_USER_START,
    payload: { userId, token, user }
});

export const updateUserSuccess = user => ({
    type: UserActionTypes.UPDATE_USER_SUCCESS,
    payload: user
});

export const updateUserFail = error => ({
    type: UserActionTypes.UPDATE_USER_FAIL,
    payload: error
});

export const updateProfile = (userId, token, healthInformation) => ({
    type: UserActionTypes.UPDATE_PROFILE_START,
    payload: { userId, token, healthInformation }
});

export const updateProfileSuccess = healthInformation => ({
    type: UserActionTypes.UPDATE_PROFILE_SUCCESS,
    payload: healthInformation
});

export const updateProfileFail = error => ({
    type: UserActionTypes.UPDATE_PROFILE_FAIL,
    payload: error
});
