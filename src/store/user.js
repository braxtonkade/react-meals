import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  firstName: "",
  lastName: "",
  email: "",
  id: "",
  loggedIn: false,
  orders: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    handleUserOrders(state, action) {
      state.orders = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
