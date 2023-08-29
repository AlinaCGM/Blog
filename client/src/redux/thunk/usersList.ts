import { usersActions } from "../slice/usersList";
import { AppDispatch } from "../store";
import axios from "axios";
import { url } from "../../App";

function fetchUsers() {
  return async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${url}/users`, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      dispatch(usersActions.getUsersList(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
export default fetchUsers;
