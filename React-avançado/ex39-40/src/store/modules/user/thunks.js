import { api } from "../../../services/api";
import { signIn } from "./actions";

export const signInThunk = (userData) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.setItem("token", response.data.access);

      dispatch(signIn(response.data.access));
    })
    .catch((err) => console.log(err));
};
