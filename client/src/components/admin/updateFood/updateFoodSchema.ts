import * as YUP from "yup";

const updateFoodSchema = YUP.object().shape({
  title: YUP.string().min(2, "Title too short!").required("*Required"),
  category: YUP.string().min(2, "Category too short!").required("*Required"),
  image: YUP.string().min(2, "Image URL too short!").required("*Required"),
  description: YUP.object()
    .shape({
      ingredients: YUP.array()
        .of(
          YUP.string().min(
            2,
            "Each ingredient should have at least 2 characters."
          )
        )
        .min(1, "At least one ingredient required.")
        .required("*Required for Ingredients"),
      instructions: YUP.array()
        .of(
          YUP.string().min(
            5,
            "Each instruction should have at least 5 characters."
          )
        )
        .min(1, "At least one instruction required.")
        .required("*Required for Instructions"),
    })
    .required("*Description required."),
});

export default updateFoodSchema;
