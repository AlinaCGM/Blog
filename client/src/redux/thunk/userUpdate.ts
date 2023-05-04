import { AppDispatch } from "../store";
import axios from "axios";
import { url } from "./../../App";
import { userActions } from "./../slice/user";
import { InitialUpdateType } from "../../components/users/userInformation/UserProfile";

export function userUpdate(id: string, values: InitialUpdateType) {
  const token = localStorage.getItem("token");
  return async (dispatch: AppDispatch) => {
    axios
      .put(`${url}/users/${id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => dispatch(userActions.getUser(res.data)))
      .catch((error) => dispatch(userActions.errorHandler(error)));
  };
}
