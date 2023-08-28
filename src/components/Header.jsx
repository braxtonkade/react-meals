import React from "react";
import styles from "../css-modules/Header.module.css";
import meals from "../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </div>
      <div className={styles["main-image"]}>
        <img src={meals} alt="Table with assortment of food" />
      </div>
    </>
  );
};

export default Header;
