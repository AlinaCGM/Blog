import * as YUP from "yup";

const addFoodSchema = YUP.object().shape({
  title: YUP.string()
    .min(2, "Name Too Short!")
    // .max(50, "Name Too Long!")
    .required("*Required"),
  category: YUP.string()
    .min(2, "Name Too Short!")
    // .max(50, "Name Too Long!")
    .required("*Required"),
  image: YUP.string()
    .min(2, "Name Too Short!")
    // .max(500, "Name Too Long!")
    .required("*Required"),
  description: YUP.string()
    .min(2, "Name Too Short!")
    // .max(999, "Name Too Long!")
    .required("*Required"),
});

export default addFoodSchema;
