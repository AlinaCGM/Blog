import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button, TextField } from "@mui/material";
import "./foodInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchFoodData } from "../../../redux/thunk/food";
import { IconButton } from "@mui/material";
import { url } from "./../../../App";
import axios from "axios";
import UpdateFoodModal from "./UpdateFoodModal";
import { FoodType } from "../../../types/foodType";

const FoodInformation = () => {
  const foodList = useSelector((state: RootState) => state.food.food);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [foodToModal, setFoodToModal] = useState<FoodType>();

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch, foodList]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const token = localStorage.getItem("token");
  const removeFood = (id: string) => {
    axios
      .delete(`${url}/food/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          handleClick();
        }
      });
  };

  const updateFood = (id: string) => {
    setOpenModal(true);
    const foodToUpdate = foodList.find((item) => item._id === id);
    setFoodToModal(foodToUpdate);
  };

  return (
    <div className="food-info-container">
      <h2>Food Recipes Information</h2>
      <TableContainer component={Paper} sx={{ maxWidth: "90%" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>#</b>
              </TableCell>
              <TableCell>
                <b>Image</b>
              </TableCell>
              <TableCell>
                <b>Title</b>
              </TableCell>
              <TableCell>
                <b>Category</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Ingredients</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {foodList.map((food, index) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={food._id}
                >
                  <TableCell>{index + 1}</TableCell>

                  <TableCell component="th" scope="row">
                    <img src={food.image} height={70} alt={food.title} />
                  </TableCell>
                  <TableCell>{food.title}</TableCell>
                  <TableCell>{food.category}</TableCell>

                  {food.description && (
                    <TableCell>{food.description.slice(0, 150)} ...</TableCell>
                  )}
                  {food.ingredients && (
                    <TableCell>{food.ingredients.slice(0, 150)}...</TableCell>
                  )}

                  <TableCell>
                    <IconButton onClick={() => updateFood(food._id)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => removeFood(food._id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <UpdateFoodModal
        open={openModal}
        setOpenModal={setOpenModal}
        foodToModal={foodToModal}
      />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product removed successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FoodInformation;
