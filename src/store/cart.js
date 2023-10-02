import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.amount, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + action.payload.amount };
          } else {
            return item;
          }
        });
        state.items = updatedItems;
      } else {
        state.items.push(action.payload);
      }
      state.total = calculateTotal(state.items);
    },
    removeItem(state, action) {
      if (
        action.payload.item.amount === 1 ||
        action.payload.type === "delete"
      ) {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload.item.id
        );
        state.items = updatedItems;
      } else {
        state.items.forEach((item) => {
          if (item.id === action.payload.item.id) {
            item.amount--;
          }
        });
      }
      state.total = calculateTotal(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
