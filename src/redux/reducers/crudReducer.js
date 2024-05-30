import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../Firebase"

const initialState = {
    users  : []
}

const crudreducer = (state=initialState,action) => {
    switch(action.type){
        case  'GETUSER' :
            return {
                ...state,
                users : action.payload
            }
        default :
            return state
    }
}

export default crudreducer