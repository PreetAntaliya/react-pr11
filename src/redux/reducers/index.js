import { combineReducers } from "redux"
import crudreducer from "./crudReducer"

const rooteReducer = combineReducers({
    crud : crudreducer
})

export default rooteReducer