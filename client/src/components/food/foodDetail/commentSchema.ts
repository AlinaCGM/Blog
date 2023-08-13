import * as YUP from "yup";

const commentSchema = YUP.object().shape({
  comment: YUP.string()
    .min(2, "Comment too short!")
    .required("*Please write a comment"),
});

export default commentSchema;
