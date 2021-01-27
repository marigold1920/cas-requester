import { put, all, call, takeLatest } from "redux-saga/effects";

import { uploadImageToS3 } from "../../apis/core.api";
import { login, updateProfile, updateUser } from "../../apis/user.apis";
import { updateStatusCode } from "../message/message.action";
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
        yield put(updateStatusCode(401));
    }
}

function* updateProfileStart({ payload: { userId, token, healthInformation } }) {
    try {
        const response = yield call(updateProfile, userId, token, healthInformation);

        yield put(updateProfileSuccess(response.data));
        yield put(updateStatusCode(203));
    } catch (error) {
        yield put(updateProfileFail(error));
        yield put(updateStatusCode(error.message.includes("401") ? 700 : 403));
    }
}

function* updateUserStart({ payload: { userId, token, user } }) {
    try {
        let _user = null;

        if (user.image.uri) {
            const _response = yield call(uploadImageToS3, user.image);
            _user = { ...user, imageUrl: _response.body.postResponse.location };
        } else {
            _user = user;
        }
        const response = yield call(updateUser, userId, token, _user);

        yield put(updateUserSuccess(response.data));
        yield put(updateStatusCode(202));
    } catch (error) {
        yield put(updateUserFail(error));
        yield put(updateStatusCode(402));
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
