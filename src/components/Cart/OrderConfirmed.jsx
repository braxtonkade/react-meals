import React from "react";
import "animate.css/animate.css";
import styles from "./Cart.module.css";
import greenCheck from "../../assets/images/white-check-in-green-circle.jpg";

const OrderConfirmed = () => {
  return (
    <div className="animate__animated animate__jackInTheBox">
      <div className={`${styles.ordered}`}>
        <img
          src={greenCheck}
          alt="Green check verifying order has been completed."
        />
        <h3>Thank You!</h3>
        <h4>Your order has been recieved.</h4>
        <p>
          You will recieve a confirmation email with information on how to track
          the status of your order.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmed;
