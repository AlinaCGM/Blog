import { AppDispatch } from "../store";
import { url } from "../../App";
import { commentActions } from "./../slice/comment";
import axios from "axios";

export function fetchCommentByFoodId(foodId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${url}/comments/${foodId}`);
      const data = await response.data;
      console.log(data, "comments in thunk");
      dispatch(commentActions.getCommentByFoodId(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchAllComments() {
  return async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/comments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.data;
      console.log(data, "commet in thunk");
      dispatch(commentActions.getAllcomments(data));
    } catch (error) {
      console.log(error);
    }
  };
}
