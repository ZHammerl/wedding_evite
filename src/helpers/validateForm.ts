import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  email: yup.string().trim().required("Email is required"),
  password: yup.string().trim().required("Password is required"),
});

export const RegisterValidate = yup.object().shape({
  email: yup.string().trim().required("Email is required"),
  password: yup.string().trim().required("Password is required"),
  confirmPassword: yup.string().trim().required("Password is required"),
  //!create a metod to compare passwords
});
