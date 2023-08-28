import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import styles from "../css-modules/HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  const { cart, setToggleCart } = useContext(AppContext);

  let amount;
  if (cart.length > 0) {
    amount = cart
      .map((item) => item.amount)
      .reduce((accum, curr) => accum + curr);
  }

  function handleOpenCart() {
    setToggleCart(true);
  }

  return (
    <>
      <button onClick={handleOpenCart} className={styles.button}>
        {<CartIcon />}Your Cart
        <div className={styles.badge}>{cart.length > 0 ? amount : 0}</div>
      </button>
    </>
  );
};

export default HeaderCartButton;
