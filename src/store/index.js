import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import cartReducer from "./cart";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
