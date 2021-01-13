import { combineReducers } from "redux";

import userReducer from "./user/user.reducers";
import requestReducer from "./request/request.reducers";
import messageReducer from "./message/message.reducers";

const rootReducer = combineReducers({
    user: userReducer,
    request: requestReducer,
    message: messageReducer
});

export default rootReducer;
