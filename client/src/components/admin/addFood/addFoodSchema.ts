import * as YUP from "yup";

const addFoodSchema = YUP.object().shape({
  title: YUP.string()
    .min(2, "Name Too Short!")
    // .max(50, "Name Too Long!")
    .required("*Required"),
  category: YUP.string()
    .min(2, "Category Too Short!")
    // .max(50, "Category Too Long!")
    .required("*Required"),
  image: YUP.string()
    .min(2, "Image URL Too Short!")
    // .max(500, "Image URL Too Long!")
    .required("*Required"),
  description: YUP.object().shape({
    ingredients: YUP.array()
      .of(
        YUP.string().min(
          2,
          "Each ingredient should have at least 2 characters."
        )
      )
      .required("*Required for Ingredients"),
    instructions: YUP.array()
      .of(
        YUP.string().min(
          2,
          "Each instruction should have at least 2 characters."
        )
      )
      .required("*Required for Instructions"),
  }),
});

export default addFoodSchema;
