import { all, call, put, takeLatest } from "redux-saga/effects";

import RequestActionTypes from "./request.types";
import {
    cancelRequestFail,
    cancelRequestSuccess,
    feedbackRequestFail,
    feedbackRequestSuccess,
    fetchRequestFail,
    fetchRequestSuccess,
    saveRequestFail,
    saveRequestSuccess
} from "./request.actions";
import { cancelRequest, feedbackRequest, fetchRequest, saveRequest } from "../../apis/request.apis";

function* saveRequestStart({ payload: { token, request, pickUp, destination } }) {
    try {
        const response = yield call(saveRequest, token, request);

        yield put(
            saveRequestSuccess({
                requestId: response.data,
                pickUp,
                destination
            })
        );
    } catch (error) {
        yield put(saveRequestFail(error));
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
    } catch (error) {
        yield put(feedbackRequestFail(error));
    }
}

function* cancelRequestStart({ payload: { token, requestId } }) {
    try {
        yield call(cancelRequest, token, requestId);
        yield put(cancelRequestSuccess());
    } catch (error) {
        yield put(cancelRequestFail(error));
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

export default function* requestSagas() {
    yield all([
        call(onSaveRequest),
        call(onFetchRequest),
        call(onFeedbackRequest),
        call(onCancelRequest)
    ]);
}
