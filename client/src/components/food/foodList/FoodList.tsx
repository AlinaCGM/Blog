import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import FoodItem from "../foodItem/FoodItem";
import { fetchFoodData } from "./../../../redux/thunk/food";
import SearchBar from "../../search/SearchBar";
import { Box } from "@mui/material";

const FoodList = () => {
  const foodList = useSelector((state: RootState) => state.food.food);
  const foodSearchList = useSelector(
    (state: RootState) => state.search.searchResultList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <Box
        className="food-list"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {foodList.length !== 0 ? (
          foodSearchList.length !== 0 ? (
            foodSearchList.map((item) => {
              return <FoodItem key={item._id} food={item} />;
            })
          ) : (
            foodList.map((item) => {
              return <FoodItem key={item._id} food={item} />;
            })
          )
        ) : (
          <div className="loading">
            <i className="fas fa-spinner fa-spin fa-xl" />
            <em>Please wait...</em>
          </div>
        )}
      </Box>
    </>
  );
};
export default FoodList;
