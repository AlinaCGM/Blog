import * as YUP from "yup";

const updateFoodSchema = YUP.object().shape({
  title: YUP.string().min(2, "Name Too Short!").required("*Required"),
  category: YUP.string().min(2, "Name Too Short!").required("*Required"),
  image: YUP.string().min(2, "Name Too Short!").required("*Required"),
  description: YUP.string().min(2, "Name Too Short!").required("*Required"),
});

export default updateFoodSchema;
