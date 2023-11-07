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

export const EventValidate = yup.object().shape({
  title: yup.string(),
  nameOne: yup.string().required("Name is required"),
  surnameOne: yup.string(),
  nameTwo: yup.string().required("Name is required"),
  surnameTwo: yup.string(),
  date: yup.date().required("Date is required"),
  contact: yup.array().of(
    yup.object().shape({
      title: yup.string(),
      name: yup.string(),
      phone: yup.string(),
      inChargeOf: yup.string(),
    })
  ),
  locations: yup.array().of(
    yup.object().shape({
      title: yup.string().required("This field is required"),
      name: yup.string().required("This field is required"),
      image: yup.string(),
      date: yup.date().required("This field is required"),
      time: yup.string().required("This field is required"),
      address: yup.string().required("This field is required"),
    })
  ),
  message: yup.string().required("Say something to your guests"),
});
