import React, { useContext } from "react";

import styles from "./Modal.module.css";
import LoginForm from "../Forms/LoginForm";
import AppContext from "../../context/AppContext";

const LoginPage = () => {
  const { setToggleModal, setLoggingIn, user } = useContext(AppContext);

  function handleLoginClose() {
    setLoggingIn(false);
    setToggleModal(false);
  }

  return (
    <>
      <button className={styles.button} onClick={handleLoginClose}>
        ✕
      </button>
      <h1 className={styles.heading}>
        {user ? `Hi, ${user.firstName}` : "Login"}
      </h1>
      {!user && <LoginForm />}
    </>
  );
};

export default LoginPage;
