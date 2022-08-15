import React from "react";
import { Form, Formik } from "formik";
import { SCHEMA_SIGNUP } from "../../../utils/validateSchemas";
import styles from "./SignUpForm.module.scss";
import Input from "../Input";

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  passwordConfirm: "",
  picked: "",
};
const SignUpForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SCHEMA_SIGNUP}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <div className={styles.row}>
              <Input
                name="fname"
                type="text"
                placeholder="first name"
                // className={styles.input}
              />
              <Input
                name="lname"
                type="text"
                placeholder="last name"
                // className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <Input
                name="dname"
                type="text"
                placeholder="display name"
                // className={styles.input}
              />
              <Input
                name="email"
                type="email"
                placeholder="email address"
                id="email"
                // className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <Input
                name="password"
                type="password"
                placeholder="password"
                // className={styles.input}
              />
              <Input
                name="passwordConfirm"
                type="password"
                placeholder="password confirmation"
                // className={styles.input}
              />
            </div>
            <div>
              <label className={styles.flex}>
                <Input
                  name="picked"
                  type="radio"
                  value="one"
                  className={styles.radio}
                />
                <div className={styles.radio_span_container}>
                  <h2 className={styles.radio_h2}>Join As a Buyer</h2>
                  <span className={styles.radio_span}>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </span>
                </div>
              </label>
              <label className={styles.flex}>
                <Input
                  name="picked"
                  type="radio"
                  value="two"
                  className={styles.radio}
                />
                <div className={styles.radio_span_container}>
                  <h2 className={styles.radio_h2}>
                    Join As a Creative or Marketplace Seller
                  </h2>
                  <span className={styles.radio_span}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </span>
                </div>
              </label>
            </div>
            <input
              type="submit"
              value="Create account"
              className={styles.submit}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
