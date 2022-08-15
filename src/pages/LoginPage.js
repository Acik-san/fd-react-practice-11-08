import React from "react";
import LogInForm from "../components/forms/LogInForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section>
      <h1 className={styles.h1}>Login to your account</h1>
      <LogInForm onSubmit={onSubmit} />
    </section>
  );
};
export const onSubmit = (values, formikBag) => {
  formikBag.resetForm();
};
export default LoginPage;
