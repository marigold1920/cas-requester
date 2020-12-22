import { combineReducers } from "redux";

import geofirestoreReducer from "./geofirestore/geofirestore.reducers";
import userReducer from "./user/user.reducers";
import requestReducer from "./request/request.reducers";
import messageReducer from "./message/message.reducers";

const rootReducer = combineReducers({
    user: userReducer,
    geofirestore: geofirestoreReducer,
    request: requestReducer,
    message: messageReducer
});

export default rootReducer;
