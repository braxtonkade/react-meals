import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

function App() {
  const [guest, setGuest] = useState(null);
  const [cart, setCart] = useState([]);
  const [prevOrders, setPrevOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [ordering, setOrdering] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const context = {
    guest: guest,
    cart: cart,
    total: total,
    ordering: ordering,
    ordered: ordered,
    loggingIn: loggingIn,
    setLoggingIn,
    setCart,
    setToggleModal,
    setOrdered,
    setPrevOrders,
    setOrdering,
    setGuest,
  };

  useEffect(() => {
    console.log(guest);
    console.log(cart);
    console.log(toggleModal);
    console.log(loggingIn);
    console.log(ordering);
    console.log(ordered);
  }, [prevOrders]);

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

  return (
    <AppContext.Provider value={context}>
      <div>
        <Header />
        <Meals />
        {toggleModal && <Modal />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
