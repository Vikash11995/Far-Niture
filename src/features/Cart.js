import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  CartTabStatus: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const productIndexId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (productIndexId >= 0) {
        state.items[productIndexId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },

    toggleCartTab(state) {
      state.CartTabStatus = !state.CartTabStatus;
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const productIndexId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity >0) {
        state.items[productIndexId].quantity = quantity;
      } else {
        state.items = (state.items).filter(item => item.productId !== productId)
      }
    },

 
  },
});

export const { addToCart, toggleCartTab,changeQuantity } = CartSlice.actions;
export default CartSlice.reducer;
