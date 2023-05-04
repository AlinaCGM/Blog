import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

// Type for Users
type InitialType = {
  usersData: UserType[];
};

// Initial Value
const initialState: InitialType = {
  usersData: [],
};

// Slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersList: (state, action) => {
      state.usersData = action.payload;
    },
    toggleBanStatus: (state, action) => {
      const userId = action.payload;
      const userToToggle = state.usersData.find((user) => user._id === userId);
      if (userToToggle) {
        userToToggle.isBanned = !userToToggle.isBanned;
      }
    },
    toggleAdminStatus: (state, action) => {
      const userId = action.payload;
      const userToggle = state.usersData.find((user) => user._id === userId);
      if (userToggle) {
        userToggle.isAdmin = !userToggle.isAdmin;
      }
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
