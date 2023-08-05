import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Rating, Button, IconButton, Snackbar, Alert } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useState } from "react";

import { favoriteActions } from "../../../redux/slice/favorite";
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
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const favState = useSelector((state: RootState) => state.favorite.favorites);
  const alert = useSelector((state: RootState) => state.favorite.alert);

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
        <div>
          <Rating
            name="half-rating"
            defaultValue={food.rate}
            precision={0.5}
            readOnly
          />
        </div>
        <div>
          <IconButton onClick={favHandler}>
            <FavoriteBorderIcon sx={{ color: isFav ? "red" : "gray" }} />
          </IconButton>
        </div>
      </FoodItemRateFav>
      <p>{food.description.slice(0, 100)}...</p>
      <Link to={`/food/${food._id}`}>
        <Button></Button>
      </Link>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isFav ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {alert}
        </Alert>
      </Snackbar>
    </FoodItemContainer>
  );
};

export default FoodItem;
