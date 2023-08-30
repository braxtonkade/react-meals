import React, { useContext } from "react";
import styles from "../css-modules/Modal.module.css";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import AppContext from "../context/AppContext";
import GuestInfoForm from "./GuestInfoForm";
import ConfirmOrder from "./ConfirmOrder";
import NewUserForm from "./NewUserForm";

const Modal = () => {
  const { ordered, newUser, guest, ordering, loggingIn } =
    useContext(AppContext);
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {!ordering && !loggingIn && <Cart />}
        {loggingIn && !newUser && <LoginPage />}
        {newUser && <NewUserForm />}
        {ordering && !loggingIn && !ordered && !guest && <GuestInfoForm />}
        {guest && !ordered && ordering && <ConfirmOrder />}
      </div>
    </div>
  );
};

export default Modal;
