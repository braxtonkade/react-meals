import React, { useContext } from "react";

import styles from "../css-modules/Modal.module.css";
import LoginForm from "./LoginForm";
import AppContext from "../context/AppContext";

const LoginPage = () => {
  const { setToggleModal, setLoggingIn } = useContext(AppContext);

  function handleLoginClose() {
    setLoggingIn(false);
    setToggleModal(false);
  }

  return (
    <>
      <button className={styles.button} onClick={handleLoginClose}>
        ✕
      </button>
      <h1 className={styles.heading}>Login</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
