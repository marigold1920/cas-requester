import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";

import userReducer from "./user/user.reducers";

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
