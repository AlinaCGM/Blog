import { createSlice } from "@reduxjs/toolkit";
import { FoodType } from "../../types/foodType";

type InitialType = {
  food: FoodType[];
  foodDetail: FoodType;
};

const initialState: InitialType = {
  food: [],
  foodDetail: {
    _id: "",
    title: "",
    category: "",
    ingredients: "",
    description: "",
    image: "",
    status: true,
    rate: 0,
  },
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    getFoodList: (state, action) => {
      state.food = action.payload;
    },
    getFoodDetail: (state, action) => {
      state.foodDetail = action.payload;
    },
    addRate: (state, action) => {
      const { foodId, rate } = action.payload;
      const foodItem = state.food.find((item) => item._id === foodId);
      if (foodItem) {
        foodItem.rate = rate;
      }
    },
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice.reducer;
