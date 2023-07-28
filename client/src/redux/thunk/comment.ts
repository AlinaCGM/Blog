import { AppDispatch } from "../store";
import { url } from "../../App";
import { commentActions } from "./../slice/comment";
import axios from "axios";

export function fetchCommentByFoodId(foodId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${url}/comments/food/${foodId}`);
      const data = await response.data;
      console.log(data, "comment in thunk");
      // Modify the dispatch action to include the foodId and the fetched comments
      dispatch(commentActions.getCommentByFoodId({ foodId, comments: data }));
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
      dispatch(commentActions.getAllComments(data));
    } catch (error) {
      console.log(error);
    }
  };
}
