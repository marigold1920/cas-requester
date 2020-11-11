import { put, all, call, takeLatest } from "redux-saga/effects";

import { login } from "../../apis/user.apis";
import { signInFail, signInSuccess } from "./user.actions";

import UserActionTypes from "./user.tyles";

export function* signInStart({ payload: { username, password } }) {
    try {
        const response = yield call(login, username, password);

        yield put(signInSuccess(response.data));
    } catch (error) {
        yield put(signInFail(error));
    }
}

export function* onLogin() {
    yield takeLatest(UserActionTypes.SIGNIN_START, signInStart);
}

export default function* userSagas() {
    yield all([call(onLogin)]);
}
