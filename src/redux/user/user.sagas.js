import { put, all, call, takeLatest } from "redux-saga/effects";

import { login, updateProfile } from "../../apis/user.apis";
import { signInFail, signInSuccess, updateProfileFail, updateProfileSuccess } from "./user.actions";

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

export function* onLogin() {
    yield takeLatest(UserActionTypes.SIGNIN_START, signInStart);
}

export function* onUpdateProfile() {
    yield takeLatest(UserActionTypes.UPDATE_PROFILE_START, updateProfileStart);
}

export default function* userSagas() {
    yield all([call(onLogin), call(onUpdateProfile)]);
}
