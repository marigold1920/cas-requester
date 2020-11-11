import { eventChannel } from "redux-saga";
import { put, call, all, takeLatest, take } from "redux-saga/effects";

import { findNearest } from "../../firebase/firebase.utils";

import { findNearestDriversFail, findNearestDriversSuccess } from "./geofirestore.actions";

import GeofirestoreActionTypes from "./geofirestore.types";

export function* findNearestDrivers({ payload: { latitude, longitude } }) {
    const query = yield call(findNearest, latitude, longitude);
    const channel = new eventChannel(emiter => {
        const listener = query.onSnapshot(snapshot => {
            emiter({ data: snapshot.docs.map(item => item.id) });
        });

        return () => {
            listener.off();
        };
    });
    try {
        while (true) {
            const data = yield take(channel);
            yield put(findNearestDriversSuccess(data.data));
        }
    } catch (error) {
        yield put(findNearestDriversFail(error));
    }
}

export function* onFindNearestDrivers() {
    yield takeLatest(GeofirestoreActionTypes.FIND_NEAREST_START, findNearestDrivers);
}

export default function* geofirestoreSagas() {
    yield all([call(onFindNearestDrivers)]);
}
