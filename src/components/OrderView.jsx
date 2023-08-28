import { useContext } from "react";
import styles from "../css-modules/OrderView.module.css";
import Card from "./Card";
import OrderItem from "./OrderItem";
import CartContext from "../context/CartContext";

const OrderView = () => {
  const { setOrdered } = useContext(CartContext);
  const order = JSON.parse(localStorage.getItem("cart"));

  const total = order
    .map((meal) => meal.price * meal.amount)
    .reduce((accum, curr) => accum + curr)
    .toFixed(2);

  return (
    <div className={styles.order}>
      <Card>
        <h2 className={styles.heading}>Your Order</h2>
        <ul>
          {order.map((meal) => (
            <OrderItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
            />
          ))}
        </ul>
        {/* <ul>
          {order.map((meal) => (
            <OrderItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
            />
          ))}
        </ul> */}
        <div className={styles.total}>
          <p>Order Total:</p>
          <p>${total}</p>
        </div>
      </Card>
      <button className={styles.button} onClick={() => setOrdered(false)}>
        Add Another Order
      </button>
    </div>
  );
};

export default OrderView;
