import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please Enter your email"),
  password: Yup.string().required("Please Enter your password"),
});

export default loginSchema;
