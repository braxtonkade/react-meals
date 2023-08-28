import React from "react";

import styles from "../css-modules/Modal.module.css";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <h1 className={styles.heading}>Login</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
