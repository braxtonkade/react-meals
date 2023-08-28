import { useContext } from "react";
import CartContext from "../context/CartContext";
import styles from "../css-modules/CartItem.module.css";

const CartItem = ({ name, price, amount }) => {
  const { cart, setCart } = useContext(CartContext);

  // Can you reduce duplication in handleAmountIncrease and handleAmountDecrease?

  function handleAmountIncrease() {
    let currItem = cart.find((item) => item.name === name);

    setCart(
      cart.map((item) => {
        if (item.name === currItem.name) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      })
    );
  }

  // Can you reduce duplication in handleAmountIncrease and handleAmountDecrease?
  function handleAmountDecrease() {
    let currItem = cart.find((item) => item.name === name);

    if (currItem.amount === 1) {
      setCart(cart.filter((item) => item.name !== currItem.name));
    } else {
      setCart(
        cart.map((item) => {
          if (item.name === currItem.name) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        })
      );
    }
  }

  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <p className={styles.price}>${price}</p>
          <p className={styles.amount}>x {amount}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={handleAmountDecrease}>-</button>

        <button onClick={handleAmountIncrease}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
