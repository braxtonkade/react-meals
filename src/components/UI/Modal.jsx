import React from "react";
import styles from "./Modal.module.css";
import Cart from "../Cart/Cart";
import LoginPage from "../LoginPage/LoginPage";
import GuestInfoForm from "../Forms/GuestInfoForm";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import NewUserForm from "../Forms/NewUserForm";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import OrderConfirmed from "../Cart/OrderConfirmed";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function handleClickOut() {
    dispatch(modalActions.closeModal());
    dispatch(modalActions.setOrdering(false));
  }

  return (
    <>
      <div className={styles.modal}>
        {modal.view === "cart" && <Cart />}
        {modal.view === "login" && <LoginPage />}
        {modal.view === "new-user" && <NewUserForm />}
        {modal.view === "guest" && <GuestInfoForm />}
        {modal.view === "order" && <ConfirmOrder />}
        {modal.view === "ordered" && <OrderConfirmed />}
      </div>
      <div className={styles.backdrop} onClick={handleClickOut}></div>
    </>
  );
};

export default Modal;
