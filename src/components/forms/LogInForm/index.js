import React from "react";
import { Form, Formik } from "formik";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import styles from "./LogInForm.module.scss";
import Input from "../Input";
const initialValues = {
  email: "",
  password: "",
};
const LogInForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SCHEMA_LOGIN}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <Input
              name="email"
              type="text"
              id="login_error"
              placeholder="Email adress"
            />
            <Input
              name="password"
              type="password"
              id="login_error"
              placeholder="Password"
            />
            <input type="submit" value="LOGIN" className={styles.submit} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
