import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import emptyCart from "../../assets/images/empty-cart.svg";
import CartItem from "./CartItem";
import { modalActions } from "../../store/modal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(modalActions.closeModal());
  }

  function handleOrderCart() {
    if (!loggedIn) {
      dispatch(modalActions.showLogin());
      dispatch(modalActions.setOrdering(true));
    } else {
      dispatch(modalActions.showOrder());
    }
  }

  return (
    <>
      {cart.items.length < 1 && (
        <div className={styles.empty}>
          <img src={emptyCart} alt="Empty Shopping cart image" />
          <h3>Your Cart is Empty</h3>
          <p>Looks like you haven't added anything to your cart</p>
        </div>
      )}

      <ul className={styles["cart-items"]}>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </ul>

      {cart.items.length > 0 && (
        <div className={styles.total}>
          <p>Total Amount</p>
          <p>${cart.total.toFixed(2)}</p>
        </div>
      )}

      <div className={styles.actions}>
        <button onClick={handleCloseCart} className={styles["button--alt"]}>
          Close
        </button>
        {cart.items.length > 0 && (
          <button className={styles.button} onClick={handleOrderCart}>
            Order
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
