import React, { useState } from "react";
import addFoodSchema from "./addFoodSchema";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { url } from "../../../App";
import axios from "axios";
import "./addFood.css";

// Type Declaration
type InitialType = {
  title: string;
  image: string;
  category: string;
  ingredients: string[];
  description: string;
};

const AddFood = () => {
  const [open, setOpen] = useState(false);

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
  const initialValues: InitialType = {
    title: "",
    image: "",
    category: "",
    ingredients: [""],
    description: "",
  };

  // Function Call on Submit
  const token = localStorage.getItem("token");

  const submitHandler = (values: InitialType, { resetForm }: any) => {
    axios
      .post(
        `${url}/food`,
        values,

        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(values, "data sent to server"); // Log the data sent to the server
        console.log(res.data, "data from AddFood.tsx");
        if (res.status === 200) {
          handleClick();
          resetForm({ values: initialValues });
          setOpen(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="add-food-container">
      <div>
        <h2>Add recipe</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={addFoodSchema}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched, handleChange }) => {
          return (
            <Form className="add-food-form">
              <div>
                <TextField
                  className="add-form-text"
                  label="Title"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                />
                {errors.title && touched.title ? (
                  <div className="error-message">{errors.title}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="add-form-text"
                  label="Category"
                  name="category"
                  onChange={handleChange}
                  value={values.category}
                />
                {errors.category && touched.category ? (
                  <div className="error-message">{errors.category}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="add-form-text"
                  label="Image's Link"
                  name="image"
                  onChange={handleChange}
                  value={values.image}
                />
                {errors.image && touched.image ? (
                  <div className="error-message">{errors.image}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="add-form-text"
                  label="Ingredients"
                  name="ingredients"
                  multiline
                  rows={10}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: event.target.name,
                        value: event.target.value
                          .split(",")
                          .map((str) => str.trim()),
                      },
                    });
                  }}
                  value={
                    Array.isArray(values.ingredients)
                      ? values.ingredients.join(", ")
                      : ""
                  }
                />

                {errors.ingredients && touched.ingredients ? (
                  <div className="error-message">{errors.ingredients}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="add-form-text"
                  label="Description"
                  name="description"
                  multiline
                  rows={10}
                  onChange={handleChange}
                  value={values.description}
                />
                {errors.description && touched.description ? (
                  <div className="error-message">{errors.description}</div>
                ) : null}
              </div>

              <div>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Add Recipe
                </Button>{" "}
              </div>
            </Form>
          );
        }}
      </Formik>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddFood;
