import React from "react";
import styles from "./Modal.module.css";
import LoginForm from "../Forms/LoginForm";
import { modalActions } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLoginClose() {
    dispatch(modalActions.closeModal());
    dispatch(modalActions.setOrdering(false));
  }

  async function fetchUserOrderHistory(email) {
    const encodedEmail = encodeURIComponent(email);
    const response = await fetch(
      `https://react-meals-316e6-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${encodedEmail}"`
    );

    const data = await response.json();

    const orders = data[userInfo.id].order;

    console.log(orders);
  }

  return (
    <>
      <button className={styles.closeBtn} onClick={handleLoginClose}>
        ✕
      </button>
      <h1 className={styles.heading}>
        {userInfo.loggedIn ? `Hi, ${userInfo.firstName}` : "Login"}
      </h1>
      {!userInfo.loggedIn && <LoginForm />}
      {userInfo.loggedIn && (
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => fetchUserOrderHistory(userInfo.email)}
          >
            View Orders
          </button>
          <button
            onClick={() => console.log(userInfo)}
            className={styles.button}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default LoginPage;
