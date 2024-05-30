import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../Firebase"

const initialState = {
    users  : []
}

const crudreducer = (state=initialState,action) => {
    switch(action.type){
        case  'adduser' :
            const db = getDatabase(app);
            set(ref(db,`users/${action.payload.userid}`),{
                name : action.payload.name,
                email : action.payload.email,
                phone : action.payload.phone,
                message : action.payload.message,
            })

        default :
            return state
    }
}

export default crudreducer