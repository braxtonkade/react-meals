import React from "react";
import styles from "./MealItem.module.css";

const OrderItem = ({ name, price, amount }) => {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>✕ {amount}</p>
      </div>
      <p className={styles.price}>${(price * amount).toFixed(2)}</p>
    </div>
  );
};

export default OrderItem;
