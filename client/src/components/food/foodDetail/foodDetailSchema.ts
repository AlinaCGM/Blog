import * as YUP from "yup";

const foodDetailSchema = YUP.object().shape({
    description: YUP.string()
    .min(2, "Name Too Short!")
    .required("*Required"),
});

export default foodDetailSchema;