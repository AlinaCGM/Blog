import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Rating,
  Button,
  IconButton,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useState } from "react";
import { url } from "../../../App";
import { Tooltip } from "@mui/material";

import { favoriteActions } from "../../../redux/slice/favorite";
import { foodActions } from "../../../redux/slice/food";
import { FoodType } from "../../../types/foodType";
import { RootState } from "../../../redux/store";

const FoodItemContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "40%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
}));

const FoodItemHeading = styled("h3")({
  fontSize: "calc(100% + 0.3vw)",
  border: "1px solid gray",
  padding: "10px 10px",
  height: "100px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const FoodItemImageFrame = styled("div")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("xs")]: {
    height: "200px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "150px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "180px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "300px",
  }, // Set a fixed height for the image frame
}));

const FoodItemImage = styled("img")({
  width: "100%",
  height: "100%", // Set the image height to 100% to fit within the frame
});

const FoodItemRateFav = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

type PropType = {
  food: FoodType;
};

const FoodItem = ({ food }: PropType) => {
  const [rateAlertOpen, setRateAlertOpen] = useState(false);
  const [hasRated, setHasRated] = useState(false);
  const [userRate, setUserRate] = useState<number>(food.rate);
  const [isSavingRate, setIsSavingRate] = useState(false);
  const [open, setOpen] = useState(false);
  type AlertState = {
    message: string;
    severity: "success" | "error" | "warning" | "info";
  };

  const [alert, setAlert] = useState<AlertState>({
    message: "",
    severity: "success",
  });
  const dispatch = useDispatch();
  const favState = useSelector((state: RootState) => state.favorite.favorites);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLogin);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRateChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    if (newValue !== null) {
      setUserRate(newValue);
    }
  };

  const handleRateAlertClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setRateAlertOpen(false);
  };
  const token = localStorage.getItem("token");

  const submitRate = async () => {
    // Check if user is logged in
    if (!isLoggedIn) {
      setAlert({
        message: "Please log in to submit a rate",
        severity: "warning",
      });
      setOpen(true);
      return; // Exit the function
    }

    if (userRate !== 0) {
      setIsSavingRate(true);
      try {
        console.log("Submitting rate:", userRate); // Log the rate value

        const requestBody = JSON.stringify({ rate: userRate });
        console.log("Request body:", requestBody); // Log the request body

        // Perform POST request to add rate to the backend (MongoDB)
        const response = await fetch(`${url}/food/addRate/${food._id}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Set Content-Type header
          },
          body: requestBody,
        });

        if (response.ok) {
          const updatedFood = await response.json();
          dispatch(
            foodActions.addRate({ foodId: food._id, rate: updatedFood.rate })
          );
          setAlert({
            message: "Thank you for your rate!",
            severity: "success",
          });
          setOpen(true);
          setHasRated(true);
        } else {
          // Handle error if the request fails
          const errorData = await response.json(); // Try to get error details from the response
          setAlert({
            message: "Error adding rate.",
            severity: "error",
          });
          setOpen(true);
          console.error("Error adding rate:", errorData);
        }
      } catch (error) {
        setAlert({
          message: "An error occurred. Please try again.",
          severity: "error",
        });
        setOpen(true);
        console.error("Error:", error);
      } finally {
        setIsSavingRate(false); // Reset the saving state after the rate has been processed.
      }
    }
  };

  // Check Favorite
  let isFav = favState.some((item) => item.title === food.title);

  // Add Favorite
  const addToFavorite = () => {
    dispatch(favoriteActions.addToFavorite(food));
    dispatch(favoriteActions.showAlert("Recipe added to favorite!"));
    handleClick();
  };

  // Remove Favorite
  const removeFromFavorite = () => {
    dispatch(favoriteActions.removeFromFavorite(food));
    dispatch(favoriteActions.showAlert("Recipe removed from favorite!"));
    handleClick();
  };

  // Favorite Handler
  const favHandler = () => {
    if (isFav) {
      removeFromFavorite();
      isFav = !isFav;
    } else {
      addToFavorite();
      isFav = !isFav;
    }
  };

  return (
    <FoodItemContainer sx={{ width: "90%", marginInline: "auto" }}>
      <FoodItemHeading>{food.title}</FoodItemHeading>
      <Link to={`/food/${food._id}`}>
        <FoodItemImageFrame>
          <FoodItemImage src={food.image} alt={food.title} />
        </FoodItemImageFrame>
      </Link>
      <FoodItemRateFav>
        <Rating
          name="simple-controlled"
          value={userRate}
          onChange={handleRateChange}
        />
        <Tooltip title={!isLoggedIn ? "Please log in to submit a rate" : ""}>
          <span>
            <Button onClick={submitRate} disabled={isSavingRate || hasRated}>
              {isSavingRate ? "Rate Submitted" : "Submit Rate"}
            </Button>
          </span>
        </Tooltip>

        <div>
          <IconButton onClick={favHandler}>
            <FavoriteBorderIcon sx={{ color: isFav ? "red" : "gray" }} />
          </IconButton>
        </div>
      </FoodItemRateFav>
      <Typography sx={{ marginBlock: "10px" }}>
        {(food.ingredients ?? "").slice(0, 20)} ...
      </Typography>
      <Typography>{(food.description ?? "").slice(0, 50)} ...</Typography>

      <Link to={`/food/${food._id}`}>
        <Button> {">>"}</Button>
      </Link>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </FoodItemContainer>
  );
};

export default FoodItem;
