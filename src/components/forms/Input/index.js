import { ErrorMessage, Field } from "formik";
import React from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

const Input = (props) => {
  const { name, ...restProps } = props;
  const errorClasses = cx(
    name === "passwordConfirm" || restProps.id === "email" || name === "lname"
      ? styles.right_side_error
      : styles.error,
    restProps.type === "radio" ? styles.radio_error : null
  );
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClasses = cx(
            restProps.type === "radio" ? null : styles.input,
            {
              [styles.invalid]: meta.touched && meta.error,
            }
          );
          return <input {...field} className={inputClasses} {...restProps} />;
        }}
      </Field>
      <ErrorMessage name={name} component="span" className={errorClasses} />
    </label>
  );
};

export default Input;
