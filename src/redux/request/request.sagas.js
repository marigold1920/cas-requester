import { all, call, put, takeLatest } from "redux-saga/effects";

import RequestActionTypes from "./request.types";
import {
    cancelRequestFail,
    cancelRequestSuccess,
    feedbackRequestFail,
    feedbackRequestSuccess,
    fetchConfigFail,
    fetchConfigSuccess,
    fetchRequestFail,
    fetchRequestSuccess,
    rejectedRequestFail,
    rejectedRequestSuccess,
    saveRequestFail,
    saveRequestSuccess
} from "./request.actions";
import {
    cancelRequest,
    feedbackRequest,
    fetchRequest,
    saveRequest,
    rejectedRequest
} from "../../apis/request.apis";
import { fetchConfig } from "../../apis/core.api";
import { updateStatusCode } from "../message/message.action";

function* saveRequestStart({ payload: { token, userId, request, pickUp, destination } }) {
    try {
        const response = yield call(saveRequest, token, userId, request);

        yield put(
            saveRequestSuccess({
                requestId: response.data,
                pickUp,
                destination
            })
        );
        yield put(updateStatusCode(205));
    } catch (error) {
        yield put(saveRequestFail(error));
        yield put(updateStatusCode(error.message.includes("401") ? 700 : 405));
    }
}

function* fetchRequestStart({ payload: { token, requestId } }) {
    try {
        const response = yield call(fetchRequest, token, requestId);

        yield put(fetchRequestSuccess(response.data));
    } catch (error) {
        yield put(fetchRequestFail(error));
    }
}

function* feedbackRequestStart({ payload: { token, requestId, feedback } }) {
    try {
        yield call(feedbackRequest, token, requestId, feedback);
        yield put(feedbackRequestSuccess());
        yield put(updateStatusCode(207));
    } catch (error) {
        yield put(feedbackRequestFail(error));
        yield put(updateStatusCode(error.message.includes("401") ? 700 : 405));
    }
}

function* cancelRequestStart({ payload: { token, requestId } }) {
    try {
        yield call(cancelRequest, token, requestId);
        yield put(cancelRequestSuccess());
        yield put(updateStatusCode(204));
    } catch (error) {
        yield put(cancelRequestFail(error));
        yield put(updateStatusCode(error.message.includes("401") ? 700 : 405));
    }
}

function* rejectedRequestStart({ payload: { token, requestId } }) {
    try {
        yield call(rejectedRequest, token, requestId);
        yield put(rejectedRequestSuccess());
        yield put(updateStatusCode(206));
    } catch (error) {
        yield put(rejectedRequestFail(error));
        yield put(updateStatusCode(error.message.includes("401") ? 700 : 405));
    }
}

function* fetchConfigStart({ payload: token }) {
    try {
        const response = yield call(fetchConfig, token);

        yield put(fetchConfigSuccess(response.data));
    } catch (error) {
        yield put(fetchConfigFail(error));
        yield put(updateStatusCode(error.message.includes("401") ? 700 : 405));
    }
}

export function* onSaveRequest() {
    yield takeLatest(RequestActionTypes.SAVE_REQUEST_START, saveRequestStart);
}

export function* onFetchRequest() {
    yield takeLatest(RequestActionTypes.FETCH_REQUEST_START, fetchRequestStart);
}

export function* onFeedbackRequest() {
    yield takeLatest(RequestActionTypes.FEEDBACK_REQUEST_START, feedbackRequestStart);
}

export function* onCancelRequest() {
    yield takeLatest(RequestActionTypes.CANCEL_REQUEST_START, cancelRequestStart);
}

export function* onRejectedRequest() {
    yield takeLatest(RequestActionTypes.REJECTED_REQUEST_START, rejectedRequestStart);
}

export function* onFetchConfig() {
    yield takeLatest(RequestActionTypes.FETCH_CONFIG_START, fetchConfigStart);
}

export default function* requestSagas() {
    yield all([
        call(onSaveRequest),
        call(onFetchRequest),
        call(onFeedbackRequest),
        call(onCancelRequest),
        call(onFetchConfig),
        call(onRejectedRequest)
    ]);
}
