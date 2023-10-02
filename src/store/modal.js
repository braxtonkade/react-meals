import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { view: "none", ordered: false, ordering: false },
  reducers: {
    showCart(state) {
      state.view = "cart";
    },
    showOrder(state) {
      state.view = "order";
    },
    showOrderConfirmed(state) {
      state.view = "ordered";
    },
    showLogin(state) {
      state.view = "login";
    },
    showUserSignUp(state) {
      state.view = "new-user";
    },
    showGuestSignUp(state) {
      state.view = "guest";
    },
    closeModal(state) {
      state.view = "none";
    },
    setOrdering(state, action) {
      state.ordering = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
