import { useEffect, useState } from "react";
import CartContext from "./context/CartContext";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

function App() {
  const [cart, setCart] = useState([]);
  const [prevOrders, setPrevOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggleCart, setToggleCart] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const cartContext = {
    cart: cart,
    total: total,
    ordered: ordered,
    setCart,
    setToggleCart,
    setOrdered,
    setPrevOrders,
  };

  useEffect(() => {
    if (cart.length > 0) {
      let prices = cart.map((item) => {
        return item.price * item.amount;
      });
      setTotal(prices.reduce((accum, curr) => accum + curr));
    } else {
      setTotal(0);
    }
  }, [cart]);

  useEffect(() => {
    console.log(prevOrders);
  }, [prevOrders]);

  return (
    <CartContext.Provider value={cartContext}>
      <div>
        <Header />
        <Meals />
        {toggleCart && <Modal />}
      </div>
    </CartContext.Provider>
  );
}

export default App;
