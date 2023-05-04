import { createSlice } from "@reduxjs/toolkit";

import { FoodType } from "../../types/foodType";

type InitialState = {
  searchResultList: FoodType[];
};

const initialState: InitialState = {
  searchResultList: [],
};

const searchSlice = createSlice({
  name: "searchresults",
  initialState,
  reducers: {
    searchResults: (state, action) => {
      state.searchResultList = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

const reducer = searchSlice.reducer;

export default reducer;
