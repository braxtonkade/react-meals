import styles from "./OrderView.module.css";
import Card from "../UI/Card";
import OrderItem from "../ConfirmOrder/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";

const OrderView = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.user.orders);

  return (
    <div className={styles.order}>
      <Card>
        <h2 className={styles.heading}>Your Orders</h2>
        <ul>
          {orders.map((order) => (
            <>
              <Card>
                <h3>Order {orders.indexOf(order) + 1}:</h3>
                {order.items.map((item) => (
                  <OrderItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                  />
                ))}
                <div className={styles.total}>
                  <p>Order Total:</p>
                  <p>${order.total}</p>
                </div>
              </Card>
              <hr />
            </>
          ))}
        </ul>
      </Card>
      <button
        className={styles.button}
        onClick={() => dispatch(modalActions.closeModal())}
      >
        Add Another Order
      </button>
    </div>
  );
};

export default OrderView;
