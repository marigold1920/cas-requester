import UserActionTypes from "./user.tyles";

export const login = user => ({
    type: UserActionTypes.LOGIN,
    payload: user
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT
});

export const updateUser = user => ({
    type: UserActionTypes.UPDATE_USER,
    payload: user
});

