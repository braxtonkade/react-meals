import React from "react";
import styles from "../css-modules/Modal.module.css";
import Cart from "./Cart";

const Modal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <Cart />
      </div>
    </div>
  );
};

export default Modal;
