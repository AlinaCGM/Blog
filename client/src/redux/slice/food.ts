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
    description: {
      ingredients: [],
      instructions: [],
    },
    image: "",
    status: true,
    rate: 5,
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
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice.reducer;
