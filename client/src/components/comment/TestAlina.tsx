// TestAlina.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchCommentByFoodId } from "./../../redux/thunk/comment";
import { Box } from "@mui/material";
import { CommentType } from "../../types/commentType";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { commentActions } from "../../redux/slice/comment"; // Import the commentSlice actions
import axios from "axios";
import { url } from "../../App";

function TestAlina() {
  const foodId = useSelector((state: RootState) => state.food.foodDetail._id);
  const comments = useSelector(
    (state: RootState) => state.comment.comments[foodId] || []
  );
  console.log(comments, "comments from test");
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${url}/comments/food/${foodId}`);
        const data = await response.data;
        console.log(data, "comment in useEffect"); // Make sure data is fetched correctly

        // Modify the dispatch action to include the foodId and the fetched comments
        dispatch(commentActions.getCommentByFoodId({ foodId, comments: data }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [dispatch, foodId]);

  return (
    <div>
      <Box sx={{ width: "100%", height: "50rem", border: "1px solid blue" }}>
        {comments.map((comment: CommentType) => (
          <div key={comment._id}>{comment.message}</div>
        ))}
      </Box>
    </div>
  );
}

export default TestAlina;
