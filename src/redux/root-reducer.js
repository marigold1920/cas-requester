import { combineReducers } from "redux";

import geofirestoreReducer from "./geofirestore/geofirestore.reducers";
import userReducer from "./user/user.reducers";
import requestReducer from "./request/request.reducers";

const rootReducer = combineReducers({
    user: userReducer,
    geofirestore: geofirestoreReducer,
    request: requestReducer
});

export default rootReducer;
