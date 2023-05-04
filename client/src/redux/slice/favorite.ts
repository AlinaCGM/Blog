import { createSlice } from "@reduxjs/toolkit";
import { FoodType } from "../../types/foodType";

// Local Storage
const favouriteItems =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : [];

// Initial Type
type InitialType = {
  favorites: FoodType[];
  alert: string;
};

// Initial Stage
const initialState: InitialType = {
  favorites: favouriteItems,
  alert: "",
};

// Create Slice
const favoriteSlice = createSlice({
  name: "favFood",
  initialState,
  reducers: {
    // Add Favorite
    addToFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index === -1) {
        state.favorites.push(action.payload);
        localStorage.setItem(
          "favorites",
          JSON.stringify(state.favorites.map((item) => item))
        );
      }
    },

    // Remove Favorite
    removeFromFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (item) => item._id === action.payload._id
      );
      index >= 0 && state.favorites.splice(index, 1);
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites.map((item) => item))
      );
    },
    showAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
