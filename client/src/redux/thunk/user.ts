import { userActions } from "../slice/user";
import { AppDispatch } from "../store";
import axios from "axios";
import { url } from "./../../App";

export function fetchUser(userId: string | null) {
  return async (dispatch: AppDispatch) => {
    if (!userId) {
      return { message: "no such user " };
    }
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${url}/users/${userId}`, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      dispatch(userActions.getUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
