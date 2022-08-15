import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { onSubmit } from "./LoginPage";
import styles from "./SignupPage.module.scss";

const SignupPage = () => {
  return (
    <section>
      <h1 className={styles.h1}>Create an account</h1>
      <p className={styles.p}>
        We always keep your name and email address private.
      </p>
      <SignUpForm onSubmit={onSubmit} />
    </section>
  );
};

export default SignupPage;
