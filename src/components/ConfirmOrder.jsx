import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "./OrderItem";
import styles from "../css-modules/OrderView.module.css";
import Button from "./Button";

const ConfirmOrder = () => {
  const {
    cart,
    total,
    guest,
    setOrdered,
    setPrevOrders,
    setCart,
    setOrdering,
    setGuest,
  } = useContext(AppContext);

  // function handlePost(user, order) {
  //   fetch("https://react-meals-316e6-default-rtdb.firebaseio.com/users.json", {
  //     method: "POST",
  //     body: JSON.stringify({ user, order }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  function handlePlaceOrder() {
    // handlePost(guest, cart);
    setOrdered(true);
    setPrevOrders((prev) => [...prev, cart]);
    setCart([]);
    setOrdering(false);
    setGuest(null);
  }

  return (
    <>
      <h2 className={styles.heading}>Please Confirm your Order</h2>

      <div>
        {cart.map((meal) => (
          <OrderItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
          />
        ))}

        <div className={styles.total}>
          <p>Amount Due:</p>
          <p>${total}</p>
        </div>
      </div>

      <div className={`card ${styles["customer-details"]}`}>
        <div className="card-header" style={{ fontSize: 1.25 + "rem" }}>
          <b>Customer Details</b>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            First Name: <b>{guest.firstName}</b>
          </li>
          <li className="list-group-item">
            Last Name: <b>{guest.lastName}</b>
          </li>
          <li className="list-group-item">
            Email: <b>{guest.email}</b>
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
