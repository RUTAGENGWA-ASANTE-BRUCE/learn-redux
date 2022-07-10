import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import {combineReducers} from "redux";

const reducers=combineReducers({
    counterReducer,
    loggedReducer,
})

export default reducers;