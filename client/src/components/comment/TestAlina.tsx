import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchCommentByFoodId } from "./../../redux/thunk/comment";
import { Box, Typography } from "@mui/material";
import { CommentType } from "../../types/commentType";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import comment from "../../redux/slice/comment";

function TestAlina() {
  const foodId = useSelector((state: RootState) => state.food.foodDetail._id);
  const comments = useSelector((state: RootState) => state.comment.comments);

  console.log(comments, "comments from test");
  console.log(typeof comments, "typeof from test");
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

  useEffect(() => {
    const fetchComments = async () => {
      await dispatch(fetchCommentByFoodId(foodId));
    };
    fetchComments();
  }, [dispatch, foodId]);
  return (
    <div>
      <Box sx={{ width: "100%", height: "50rem", border: "1px solid blue" }}>
        <Typography variant="h4">Test Alina</Typography>
        {/* {Array.isArray(comments) &&
          comments.map((comment) => (
            <div>
              <div> {comment.message}</div>
            </div>
          ))} */}
      </Box>
    </div>
  );
}

export default TestAlina;
