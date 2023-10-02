import React from "react";
import OrderItem from "./OrderItem";
import styles from "./OrderView.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import { cartActions } from "../../store/cart";

const ConfirmOrder = () => {
  const userInfo = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  async function postUserOrder(user, order) {
    const response = await fetch(
      `https://react-meals-316e6-default-rtdb.firebaseio.com/users/${user.id}.json?`
    );

    const userData = await response.json();

    const userOrders = userData.orders || [];
    const updatedOrders = [...userOrders, order];

    fetch(
      `https://react-meals-316e6-default-rtdb.firebaseio.com/users/${user.id}.json?`,
      {
        method: "PATCH",
        body: JSON.stringify({
          orders: updatedOrders,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  function postGuestOrder({ firstName, lastName, email }, order) {
    fetch(
      "https://react-meals-316e6-default-rtdb.firebaseio.com/guestOrders.json",
      {
        method: "POST",
        body: JSON.stringify({
          guestInfo: { firstName: firstName, lastName: lastName, email: email },
          order: order,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  function handlePlaceOrder() {
    if (userInfo.loggedIn) {
      postUserOrder(userInfo, cart);
      dispatch(cartActions.clearCart());
      dispatch(modalActions.showOrderConfirmed());
    } else {
      postGuestOrder(userInfo, cart);
      dispatch(cartActions.clearCart());
      dispatch(modalActions.showOrderConfirmed());
    }
  }

  return (
    <>
      <h2 className={styles.heading}>Please Confirm your Order</h2>

      <div className={styles.order}>
        {cart.items.map((meal) => (
          <OrderItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
          />
        ))}

        <div className={styles.total}>
          <p>Amount Due:</p>
          <p>${cart.total}</p>
        </div>
      </div>

      <div className={`card ${styles["customer-details"]}`}>
        <div className="card-header" style={{ fontSize: 1.25 + "rem" }}>
          <b>Customer Details</b>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            First Name: <b>{userInfo.firstName}</b>
          </li>
          <li className="list-group-item">
            Last Name: <b>{userInfo.lastName}</b>
          </li>
          <li className="list-group-item">
            Email: <b>{userInfo.email}</b>
          </li>
        </ul>
      </div>
      <div className={styles.flex}>
        <Button label={"Place Order"} onClick={handlePlaceOrder} />
      </div>
    </>
  );
};

export default ConfirmOrder;
