import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAllComments } from "../../../redux/thunk/comment";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import fetchUsers from "../../../redux/thunk/usersList";
import axios from "axios";
import { url } from "../../../App";

const CmtManagement = () => {
  const userList = useSelector((state: RootState) => state.userList.usersData);
  const allRecipes = useSelector((state: RootState) => state.food.food);
  const allComments = useSelector(
    (state: RootState) => state.comment.allComments
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch, allComments]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const token = localStorage.getItem("token");
  const removeComment = (id: string) => {
    axios
      .delete(`${url}/comments/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Comment removed!");
        }
      });
  };
  return (
    <Box style={{ width: "90%", marginInline: "auto" }}>
      <Typography variant="h5" style={{ paddingBottom: "50px" }}>
        User information
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>USER</TableCell>
              <TableCell align="center">COMMENT</TableCell>
              <TableCell align="center">RECIPE</TableCell>
              <TableCell align="center">REMOVE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allComments.map((comment, index) => {
              const indexUser = userList.findIndex(
                (item) => item._id === comment.userId
              );
              const recipe = allRecipes.find(
                (item) => item._id === comment.foodId
              );
              return (
                <TableRow
                  key={comment._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {`${userList[indexUser]?.firstName} ${userList[indexUser]?.lastName}`}
                  </TableCell>
                  <TableCell align="center">{comment.message}</TableCell>
                  <TableCell align="center">{recipe?.title}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => removeComment(comment._id)}>
                      remove
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default CmtManagement;
