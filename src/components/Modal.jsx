import React from "react";
import styles from "../css-modules/Modal.module.css";
import Cart from "./Cart";
import LoginPage from "./LoginPage";

const Modal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {/* <Cart /> */}
        <LoginPage />
      </div>
    </div>
  );
};

export default Modal;
