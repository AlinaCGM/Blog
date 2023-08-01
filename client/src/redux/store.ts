import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slice/comment";
import foodReducer from "./slice/food";
import userReducer from "./slice/user";
import favoriteReducer from "./slice/favorite";
import userListReducer from "./slice/usersList";
import searchReducer from "./slice/search";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    food: foodReducer,
    user: userReducer,
    userList: userListReducer,
    search: searchReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
