import React, { useContext } from "react";
import styles from "./Modal.module.css";
import Cart from "../Cart/Cart";
import LoginPage from "../LoginPage/LoginPage";
import AppContext from "../../context/AppContext";
import GuestInfoForm from "../Forms/GuestInfoForm";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import NewUserForm from "../Forms/NewUserForm";

const Modal = () => {
  const { ordered, newUser, guest, ordering, loggingIn, loggedIn } =
    useContext(AppContext);
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {!ordering && !loggingIn && <Cart />}
        {/* {loggingIn && !newUser && <LoginPage />} */}
        {/* {((ordering && !loggedIn) || !newUser || loggingIn) && <LoginPage />} */}
        {((ordering && (!loggedIn || !newUser)) || loggingIn) && <LoginPage />}
        {/* {ordering && !loggingIn && !ordered && !guest && <GuestInfoForm />} */}
        {newUser && <NewUserForm />}
        {guest && !ordered && ordering && <ConfirmOrder />}
      </div>
    </div>
  );
};

export default Modal;
