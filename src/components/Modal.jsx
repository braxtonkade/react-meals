import React, { useContext } from "react";
import styles from "../css-modules/Modal.module.css";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import AppContext from "../context/AppContext";
import ContinueAsGuest from "./ContinueAsGuest";

const Modal = () => {
  const { ordering } = useContext(AppContext);
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {/* {!ordering && <Cart />}
        {ordering && <LoginPage />} */}
        <ContinueAsGuest />
      </div>
    </div>
  );
};

export default Modal;
