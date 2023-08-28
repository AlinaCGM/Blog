import * as YUP from "yup";

const addFoodSchema = YUP.object().shape({
  title: YUP.string()
    .min(2, "Name Too Short!")
    .max(50, "Name Too Long!") // uncomment and adjust if needed
    .required("*Required"),

  category: YUP.string()
    .min(2, "Category Too Short!")
    .max(50, "Category Too Long!") // uncomment and adjust if needed
    .required("*Required"),

  image: YUP.string()
    .min(2, "Image URL Too Short!")
    .max(500, "Image URL Too Long!") // uncomment and adjust if needed
    .required("*Required"),

  ingredients: YUP.array()
    .of(YUP.string().min(2, "Ingredient Too Short!")) // validates each string in the array
    .min(1, "At least one ingredient is required!")
    .required("*Required"),

  description: YUP.string()
    .min(2, "Description Too Short!")
    .max(999, "Description Too Long!") // uncomment and adjust if needed
    .required("*Required"),
});

export default addFoodSchema;
