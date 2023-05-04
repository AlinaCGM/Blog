import { AppDispatch } from "../store";
import axios from "axios";
import { url } from "../../App";
import { InitialTypes } from "../../components/users/loginForm/LoginForm";
import { userActions } from "./../slice/user";

export function userLogin(values: InitialTypes) {
  return async (dispatch: AppDispatch) => {
    axios
      .post(`${url}/users/login`, values)
      .then((res) => res.data)
      .then((data) => {
        console.log(data, "data");
        if (data.message === "invalid") {
          dispatch(userActions.errorHandler("This email is not registerd!"));
          return;
        } else if (data.message === "wrong password!") {
          dispatch(userActions.errorHandler("Email or password is wrong!"));
          return;
        } else {
          dispatch(userActions.getUser(data.userData));
          dispatch(userActions.loginHandler(true));
          const token = data.token;
          console.log(token, "token in thunk");
          localStorage.setItem("token", token);
        }
      });
  };
}
