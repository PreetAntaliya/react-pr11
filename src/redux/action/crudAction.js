import { getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "../../Firebase";

export const ADD_USER = (obj) => {
  const db = getDatabase(app);
  return async (dispatch) => {
    try {
      await set(ref(db, `users/${obj.userid}`), {
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        message: obj.message,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

// export const ADD_USER = (obj) => {
//   return async (dispatch) => {
//     dispatch({
//       type: "adduser",
//       payload: obj,
//     });
//   };
// };

export const GET_USER = () => {
  return async (dispatch) => {
    try {
      const db = await getDatabase(app);
      const users = await ref(db, "users");
      onValue(users, (shot) => {
        const data = shot.val();
        dispatch(SET_USER(data));
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

const SET_USER = (data) => {
  return {
      type : "GETUSER",
      payload : data
  }
}