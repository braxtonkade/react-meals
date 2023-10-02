import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let amount;
  if (cart.items?.length > 0) {
    amount = cart.items
      .map((item) => item.amount)
      .reduce((accum, curr) => accum + curr);
  }

  function handleOpenCart() {
    dispatch(modalActions.showCart());
  }

  return (
    <>
      <button onClick={handleOpenCart} className={styles.button}>
        {<CartIcon />}Your Cart
        <div className={styles.badge}>
          {cart.items?.length > 0 ? amount : 0}
        </div>
      </button>
    </>
  );
};

export default HeaderCartButton;
