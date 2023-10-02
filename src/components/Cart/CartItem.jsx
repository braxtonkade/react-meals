import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import styles from "./CartItem.module.css";

const CartItem = ({ name, price, amount }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let currItem = cart.items.find((item) => item.name === name);

  function handleAmountIncrease() {
    dispatch(cartActions.addToCart({ ...currItem, amount: 1 }));
  }

  function handleAmountDecrease() {
    dispatch(cartActions.removeItem({ type: "decrement", item: currItem }));
  }

  function handleDeleteItem() {
    dispatch(cartActions.removeItem({ type: "delete", item: currItem }));
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
        <button onClick={handleDeleteItem}>🗑️</button>
      </div>
    </div>
  );
};

export default CartItem;
