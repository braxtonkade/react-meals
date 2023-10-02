import AppContext from "./context/AppContext";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import { useSelector } from "react-redux";

function App() {
  const modal = useSelector((state) => state.modal);

  return (
    <div>
      <Header />
      <Meals />
      {modal.view !== "none" && <Modal />}
    </div>
  );
}

export default App;
