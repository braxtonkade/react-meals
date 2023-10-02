import React from "react";
import styles from "./Header.module.css";
import meals from "../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";

const Header = () => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLoginClick() {
    dispatch(modalActions.showLogin());
  }

  const btnLabel = userInfo.loggedIn ? userInfo.firstName : "Login";
  return (
    <>
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <div className={styles["btn-container"]}>
          <HeaderCartButton />
          <Button label={btnLabel} onClick={handleLoginClick} />
        </div>
      </div>
      <div className={styles["main-image"]}>
        <img src={meals} alt="Table with assortment of food" />
      </div>
    </>
  );
};

export default Header;
