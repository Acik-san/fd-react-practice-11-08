import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/static/images/logo.png" alt="logo" />
      </Link>
      {pathname === "/login" ? (
        <Link to="/signup" className={styles.btn}>
          Signup
        </Link>
      ) : (
        <Link to="/login" className={styles.btn}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
