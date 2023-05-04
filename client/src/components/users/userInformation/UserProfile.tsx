import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { userUpdate } from "./../../../redux/thunk/userUpdate";
import { useSelector } from "react-redux";
import { Button, styled, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userProfile.css";
import { userActions } from "./../../../redux/slice/user";

export type InitialUpdateType = {
  firstName: string;
  lastName: string;
};

const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: InitialUpdateType = {
    firstName: user.firstName,
    lastName: user.lastName,
  };

  const SinginSchema = Yup.object().shape({
    firstName: Yup.string().required("Please Enter your first name"),
    lastName: Yup.string().required("Please Enter your last name"),
  });

  const submitHandler = (values: InitialUpdateType) => {
    setIsEdit(false);
    dispatch(userUpdate(user._id, values));
  };

  const CheckOutBTN = styled(Button)({
    color: "#fff",
    backgroundColor: "black",
    border: "none",
    "&:hover": {
      backgroundColor: "red",
      border: "none",
    },
  });
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    dispatch(userActions.loginHandler(false));
    navigate("/login");
  };

  return (
    <div className="user-profile-container">
      <div>
        <img src={user.image} alt={user.firstName} />
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={SinginSchema}
        >
          {({ errors, touched, handleChange }) => {
            return (
              <Form className="user-profile-form">
                <div>
                  {isEdit ? (
                    <div>
                      <TextField
                        required
                        name="firstName"
                        label="First name"
                        defaultValue={user?.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && touched.firstName ? (
                        <p className="user-profile-error">{errors.firstName}</p>
                      ) : null}
                    </div>
                  ) : (
                    <p>
                      <strong>First name:</strong> {user?.firstName}
                    </p>
                  )}
                </div>
                <div>
                  {isEdit ? (
                    <div>
                      <TextField
                        required
                        name="lastName"
                        label="Last name"
                        defaultValue={user?.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && touched.lastName ? (
                        <p className="user-profile-error">{errors.lastName}</p>
                      ) : null}
                    </div>
                  ) : (
                    <p>
                      <strong>Last name:</strong> {user?.lastName}
                    </p>
                  )}
                </div>
                <div>
                  <p>
                    <strong>Email:</strong> {user?.email}
                  </p>
                </div>
                {isEdit ? (
                  <div className="user-profile-btn">
                    <Button variant="outlined" onClick={() => setIsEdit(false)}>
                      cancel
                    </Button>
                    <Button variant="contained" type="submit">
                      Save
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => setIsEdit(true)}
                    type="button"
                    sx={{ marginTop: "20px" }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                )}

                <CheckOutBTN
                  variant="outlined"
                  onClick={logOut}
                  type="button"
                  sx={{ marginTop: "20px" }}
                >
                  log out
                </CheckOutBTN>
              </Form>
            );
          }}
        </Formik>
      </div>
      {user.isAdmin ? (
        <div className="user-profile-management">
          <Button variant="outlined" onClick={() => navigate("/user-mng")}>
            User management
          </Button>
          <Button variant="outlined" onClick={() => navigate("/food-mng")}>
            Food management
          </Button>
          <Button variant="outlined" onClick={() => navigate("/cmt-mng")}>
            CMT management
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export default UserProfile;
