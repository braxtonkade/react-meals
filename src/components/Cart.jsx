import React, { useContext, useState } from "react";

import "animate.css/animate.css";

import AppContext from "../context/AppContext";
import styles from "../css-modules/Cart.module.css";
import emptyCart from "../assets/images/empty-cart.svg";
import greenCheck from "../assets/images/white-check-in-green-circle.jpg";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    cart,
    total,
    guest,
    ordered,
    setCart,
    setToggleModal,
    setOrdered,
    setPrevOrders,
    setOrdering,
    setLoggingIn,
  } = useContext(AppContext);

  function handleCloseCart() {
    setToggleModal(false);
  }

  function handleOrderCart() {
    // localStorage.setItem("cart", JSON.stringify(cart));
    // setOrdered(true);
    // setPrevOrders((prev) => [...prev, cart]);
    // setCart([]);

    setLoggingIn(true);
    setOrdering(true);
  }

  return (
    <>
      {ordered && (
        <div className="animate__animated animate__jackInTheBox">
          <div className={`${styles.ordered}`}>
            <img
              src={greenCheck}
              alt="Green check verifying order has been completed."
            />
            <h3>Thank You!</h3>
            <h4>Your order has been recieved.</h4>
            <p>
              You will recieve a confirmation email with information on how to
              track the status of your order.
            </p>
          </div>
        </div>
      )}

      {cart.length < 1 && ordered === false && (
        <div className={styles.empty}>
          <img src={emptyCart} alt="Empty Shopping cart image" />
          <h3>Your Cart is Empty</h3>
          <p>Looks like you haven't added anything to your cart</p>
        </div>
      )}

      <ul className={styles["cart-items"]}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </ul>

      {cart.length > 0 && (
        <div className={styles.total}>
          <p>Total Amount</p>
          <p>${total.toFixed(2)}</p>
        </div>
      )}

      <div className={styles.actions}>
        <button onClick={handleCloseCart} className={styles["button--alt"]}>
          Close
        </button>
        {/* needs click event to order cart */}
        {cart.length > 0 && (
          <button className={styles.button} onClick={handleOrderCart}>
            Order
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
