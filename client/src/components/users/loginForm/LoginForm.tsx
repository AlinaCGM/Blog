import React, { useState } from "react";
import FormSchema from "../loginSchema/formSchema";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button, IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
// import { userLogin } from "../../../redux/thunk/userLogin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../App";
import "./loginForm.css";
import { userActions } from "../../../redux/slice/user";

// Type Declaration
export type InitialTypes = {
  email: string;
  password?: string;
};

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const error = useSelector((state: RootState) => state.user.error);
  const navigate = useNavigate();

  const showPassHandler = () => {
    setShowPass(!showPass);
  };
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
  // Initial Values
  const initialValues: InitialTypes = {
    email: "",
    password: "",
  };

  // Function Call on Submit
  const submitHandler = async (values: InitialTypes) => {
    axios
      .post(`${url}/users/login`, values)
      .then((res) => res.data)
      .then((data) => {
        console.log(data, "data");
        if (data.message === "invalid") {
          dispatch(userActions.errorHandler("This email is not registered!"));
          handleClick();
          return;
        } else if (data.message === "wrong password!") {
          dispatch(userActions.errorHandler("Email or password is wrong!"));
          handleClick();
          return;
        } else {
          dispatch(userActions.getUser(data.userData));
          dispatch(userActions.loginHandler(true));
          const token = data.token;
          console.log(token, "token in thunk");
          localStorage.setItem("token", token);
          token && navigate("/user");
        }
      });
  };

  return (
    <>
      <div>
        <h2>Login Your Account</h2>
        <span>We're missing your contribution.</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form className="form-container">
              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>

              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  onChange={handleChange}
                />
                <span className="visibility">
                  {showPass ? (
                    <IconButton onClick={showPassHandler}>
                      <VisibilityOff />
                    </IconButton>
                  ) : (
                    <IconButton onClick={showPassHandler}>
                      <Visibility />
                    </IconButton>
                  )}
                </span>
                {errors.password && touched.password ? (
                  <p className="error-message">{errors.password}</p>
                ) : null}
              </div>

              <div>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Login
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginForm;
