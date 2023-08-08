import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Formik } from "formik";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Alert } from "@mui/material";

import { url } from "../../../App";
import { FoodType } from "../../../types/foodType";
import { UserCommentType } from "../../../types/commentType";
import { RootState, AppDispatch } from "../../../redux/store";
import { favoriteActions } from "../../../redux/slice/favorite";
import { commentActions } from "../../../redux/slice/comment";
import { fetchCommentByFoodId } from "../../../redux/thunk/comment";

import CommentItem from "../../comment/CommentItem";
import commentSchema from "./commentSchema";
// commentSchema

type PropType = {
  food: FoodType;
};

type CommentFormValues = {
  commentText: string;
};

const initialFormValues: CommentFormValues = {
  commentText: "",
};

const FoodDetail = ({ food }: PropType) => {
  const [open, setOpen] = useState(false);
  const [loginAlertOpen, setLoginAlertOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const comments = useSelector((state: RootState) => state.comment.comments);

  const dispatch = useDispatch<AppDispatch>();

  const alert = useSelector((state: RootState) => state.favorite.alert);
  const favState = useSelector((state: RootState) => state.favorite.favorites);
  const [isFav, setIsFav] = useState(
    favState.some((item) => item.title === food.title)
  );

  useEffect(() => {
    dispatch(fetchCommentByFoodId(food._id));
  }, [dispatch, food._id]);

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

  const addToFavorite = () => {
    dispatch(favoriteActions.addToFavorite(food));
    dispatch(favoriteActions.showAlert("Recipe added to favorite!"));
    handleClick();
  };
  const removeFromFavorite = () => {
    dispatch(favoriteActions.removeFromFavorite(food));
    dispatch(favoriteActions.showAlert("Recipe removed from favorite!"));
    handleClick();
  };

  // Favorite Handler
  const favHandler = () => {
    if (isFav) {
      removeFromFavorite();
      setIsFav(!isFav);
    } else {
      addToFavorite();
      setIsFav(!isFav);
    }
  };
  const handleLoginAlertOpen = () => {
    setLoginAlertOpen(true);
  };
  const handleLoginAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setLoginAlertOpen(false);
  };
  const token = localStorage.getItem("token");

  const submitHandler = async (
    values: CommentFormValues,
    { resetForm }: any
  ) => {
    if (!user || !token) {
      handleLoginAlertOpen();
      console.log("alert works");
      return;
    }
    const userComment: UserCommentType = {
      userId: user._id,
      message: values.commentText,
    };

    try {
      const res = await axios.post(`${url}/comments/${food._id}`, userComment, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        resetForm({ values: initialFormValues });
        dispatch(commentActions.addComment(res.data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      <Box
        className="food-recipe"
        sx={{
          display: {
            xs: "flexBlock",
            md: "flex",
          },
          marginBlock: "30px",
          width: "90%",
          marginInline: "auto",
        }}
      >
        <Box>
          <Card sx={{ maxWidth: "500px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                // height="cover"
                image={food.image}
                alt={food.title}
              />
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ paddingInline: "20px" }}>
          <Box className="food-title">
            <h1>{food.title}</h1>
            <h3>{food.category}</h3>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxWidth: 800, lineHeight: 2 }}
            >
              <strong>Ingredients:</strong> {food.description.ingredients}
              <br />
              <strong>Instructions:</strong> {food.description.instructions}
            </Typography>

            <Link to="/all-recipes">
              <IconButton sx={{ mt: 2 }}>
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <IconButton onClick={favHandler} sx={{ mt: 2 }}>
              <FavoriteBorderIcon sx={{ color: isFav ? "red" : "gray" }} />
            </IconButton>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={isFav ? "success" : "error"}
                sx={{ width: "100%" }}
              >
                {alert}
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Box>

      <Box className="food-txtfields">
        <Formik
          initialValues={initialFormValues}
          validationSchema={commentSchema}
          onSubmit={submitHandler}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form>
                <TextField
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "50%",
                      lg: "35%",
                    },
                  }}
                  className="textBox"
                  label="Leave a comment"
                  name="commentText"
                  multiline
                  rows={10}
                  onChange={handleChange}
                  value={values.commentText}
                />
                {errors.commentText && touched.commentText ? (
                  <div className="error-message">{errors.commentText}</div>
                ) : null}
                <Box>
                  <Button
                    sx={{ width: "200px", mt: 1, marginInline: "auto" }}
                    type="submit"
                    variant="outlined"
                  >
                    Post Your Comment
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
        <Snackbar
          open={loginAlertOpen}
          autoHideDuration={3000}
          onClose={handleLoginAlertClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Alert
            onClose={handleLoginAlertClose}
            severity="error"
            sx={{ width: "300px" }}
          >
            Please log in in order to leave a comment
          </Alert>
        </Snackbar>
      </Box>

      <Container>
        <Box>
          <Typography>
            {Array.isArray(comments) &&
              comments
                .filter((comment) => comment.foodId === food._id)
                .map((comment) => {
                  return <CommentItem key={comment._id} comment={comment} />;
                })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FoodDetail;
