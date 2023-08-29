import "./registrationForm.css";
import RegistrationSchema from "../registrationSchema/registrationSchema";

import { Alert, Button, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import { Form, Formik } from "formik";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import axios from "axios";
import { url } from "../../../App";

// Type Declaration
type InitialValues = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword: string;
};

const RegistrationForm = () => {
  const [open, setOpen] = useState(false);
  const [regClicked, setRegClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleClick = () => {
    setOpen(true);
    setRegClicked(false);
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
  const initialValues: InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Function Call on Submit
  const submitHandler = (values: InitialValues) => {
    setRegClicked(true);
    axios.post(`${url}/users`, values).then((res) => {
      if (res.data.message === "available") {
        handleClick();
      } else if (res.status === 200) {
        setOpenModal(true);
        setUserName(values.firstName);
      }
    });
  };

  return (
    <div>
      <div>
        <h1>Create a new account</h1>
        <span>It's free and always will be.</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <div className="register-form">
                <div>
                  <TextField
                    label="First Name"
                    name="firstName"
                    onChange={handleChange}
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="error-message">{errors.firstName}</div>
                  ) : null}
                </div>
                <div>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    onChange={handleChange}
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="error-message">{errors.lastName}</div>
                  ) : null}
                </div>
                <div>
                  <TextField
                    label="Email"
                    name="email"
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <div className="error-message">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <div className="error-message">{errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error-message">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 5, width: "100px" }}
                >
                  {regClicked && !openModal ? (
                    <span>
                      <i className="fas fa-spinner fa-spin fa-xl" />
                    </span>
                  ) : (
                    "register"
                  )}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <SuccessModal open={openModal} setOpen={setOpenModal} name={userName} />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The email is already registerd!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegistrationForm;
