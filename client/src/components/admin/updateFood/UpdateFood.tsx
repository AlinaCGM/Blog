import updateFoodSchema from "./updateFoodSchema";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import "./updateFood.css";
import { FoodType } from "../../../types/foodType";
import { url } from "../../../App";
import axios from "axios";

// Type Declaration
type InitialValues = {
  title: string;
  category: string;
  image: string;
  description: {
    ingredients: string;
    instructions: string;
  };
};

type PropType = {
  foodToUpdate: FoodType | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateFood = ({ foodToUpdate, setOpenModal }: PropType) => {
  // Initial Values
  const initialValues: InitialValues = {
    title: "",
    category: "",
    image: "",
    description: {
      ingredients: "",
      instructions: "",
    },
  };

  // Function Call on Submit
  const token = localStorage.getItem("token");
  const submitHandler = (values: InitialValues) => {
    // Convert comma-separated strings to arrays
    const ingredientsArray: string[] = values.description.ingredients
      .split(",")
      .map((ingredient: string) => ingredient.trim());

    const instructionsArray: string[] = values.description.instructions
      .split(",")
      .map((instruction: string) => instruction.trim());

    // Create a new object with the converted arrays for submission
    const postData = {
      ...values,
      description: {
        ingredients: ingredientsArray,
        instructions: instructionsArray,
      },
    };

    axios
      .put(`${url}/food/${foodToUpdate?._id}`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setOpenModal(false);
        }
      });
  };

  return (
    <div className="update-food-form-container">
      <h2>Update recipe</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={updateFoodSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form className="update-food-form">
              <div>
                <TextField
                  className="update-food-text"
                  label="Title"
                  name="title"
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.title}
                />
                {errors.title && touched.title ? (
                  <div className="error-message">{errors.title}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="update-food-text"
                  label="Category"
                  name="category"
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.category}
                />
                {errors.category && touched.category ? (
                  <div className="error-message">{errors.category}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="update-food-text"
                  label="Image's Link"
                  name="image"
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.image}
                />
                {errors.image && touched.image ? (
                  <div className="error-message">{errors.image}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="update-food-text"
                  label="Ingredients"
                  name="description.ingredients"
                  multiline
                  rows={5}
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.description?.ingredients.join(
                    ", "
                  )}
                />
                {errors.description?.ingredients &&
                touched.description?.ingredients ? (
                  <div className="error-message">
                    {errors.description.ingredients}
                  </div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="update-food-text"
                  label="Instructions"
                  name="description.instructions"
                  multiline
                  rows={5}
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.description?.instructions.join(
                    ", "
                  )}
                />
                {errors.description?.instructions &&
                touched.description?.instructions ? (
                  <div className="error-message">
                    {errors.description.instructions}
                  </div>
                ) : null}
              </div>
              <div>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Update Recipe
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateFood;
