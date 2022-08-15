import * as Yup from "yup";

export const SCHEMA_EMAIL = Yup.string("Must be string")
  .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email")
  .required("Must be required");

export const SCHEMA_PASSWORD = Yup.string("Must be string")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
    "Invalid password"
  )
  .required("Must be required");

export const SCHEMA_NAME = Yup.string("Must be string")
  .matches(/^[A-Z][a-z]{1,16}$/, "Invalid name")
  .required("Must be required");

export const SCHEMA_LOGIN = Yup.object({
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
});

export const SCHEMA_SIGNUP = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  dname: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords not equal")
    .required("Must be required"),
  picked: Yup.string()
    .oneOf(["one", "two"], "Wrong id")
    .required("Must be required"),
});
