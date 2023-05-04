import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

type InitialType = {
  user: UserType;
  isLogin: boolean;
  error: string;
};

const initialState: InitialType = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
    isBanned: false,
    image: "",
    isGoogleLogin: false,
  },
  isLogin: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    loginHandler: (state, action) => {
      state.isLogin = action.payload;
    },
    errorHandler: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
