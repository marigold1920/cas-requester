import { put, all, call, takeLatest } from "redux-saga/effects";

import { uploadImageToS3 } from "../../apis/core.api";
import { login, updateProfile, updateUser } from "../../apis/user.apis";
import {
    signInFail,
    signInSuccess,
    updateProfileFail,
    updateProfileSuccess,
    updateUserFail,
    updateUserSuccess
} from "./user.actions";

import UserActionTypes from "./user.tyles";

function* signInStart({ payload: { username, password } }) {
    try {
        const response = yield call(login, username, password);

        yield put(signInSuccess(response.data));
    } catch (error) {
        yield put(signInFail(error));
    }
}

function* updateProfileStart({ payload: { userId, token, healthInformation } }) {
    try {
        const response = yield call(updateProfile, userId, token, healthInformation);

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        yield put(updateProfileFail(error));
    }
}

function* updateUserStart({ payload: { userId, token, user } }) {
    try {
        const _response = yield call(uploadImageToS3, user.image);
        const _user = { ...user, imageUrl: _response.body.postResponse.location };
        const response = yield call(updateUser, userId, token, _user);

        yield put(updateUserSuccess(response.data));
    } catch (error) {
        yield put(updateUserFail(error));
    }
}

export function* onLogin() {
    yield takeLatest(UserActionTypes.SIGNIN_START, signInStart);
}

export function* onUpdateProfile() {
    yield takeLatest(UserActionTypes.UPDATE_PROFILE_START, updateProfileStart);
}

export function* onUpdateUser() {
    yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserStart);
}

export default function* userSagas() {
    yield all([call(onLogin), call(onUpdateProfile), call(onUpdateUser)]);
}
