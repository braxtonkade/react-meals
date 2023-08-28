import React, { useContext } from "react";
import styles from "../css-modules/Modal.module.css";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import AppContext from "../context/AppContext";
import ContinueAsGuest from "./ContinueAsGuest";
import ConfirmOrder from "./ConfirmOrder";

const Modal = () => {
  const { ordered, guest, ordering, loggingIn } = useContext(AppContext);
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {!ordering && !loggingIn && <Cart />}
        {loggingIn && <LoginPage />}
        {ordering && !loggingIn && !ordered && !guest && <ContinueAsGuest />}
        {guest && !ordered && ordering && <ConfirmOrder />}
      </div>
    </div>
  );
};

export default Modal;
