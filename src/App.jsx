import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";

function App() {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [guest, setGuest] = useState(null);
  const [cart, setCart] = useState([]);
  const [prevOrders, setPrevOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggleModal, setToggleModal] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [ordering, setOrdering] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const context = {
    user: user,
    newUser: newUser,
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
    setUser,
    setNewUser,
    setLoggedIn,
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
    // {!ordering && !loggingIn && <Cart />}
    //     {loggingIn && !newUser && <LoginPage />}
    //     {newUser && !loggedIn && <NewUserForm />}
    //     {ordering && !loggingIn && !ordered && !guest && <GuestInfoForm />}
    //     {guest && !ordered && ordering && <ConfirmOrder />}
    console.log("Ordering", ordering);
    console.log("LoggingIn", loggingIn);
    console.log("LoggedIn", loggedIn);
    console.log("Newuser", newUser);
    console.log("Ordered", ordered);
    console.log("Guest", guest);
    console.log("user", user);
    console.log("");
  }, [ordering, loggingIn, loggedIn, newUser, ordered, guest]);
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
