import { applyMiddleware, createStore } from "redux";
import rooteReducer from "./reducers";
import { thunk } from "redux-thunk";

const store = createStore(
    rooteReducer,
    applyMiddleware(thunk)
)

export default store