import { createSlice } from "@reduxjs/toolkit";
import _isEmpty from "lodash";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
    count: 0,
  },
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      const { productId, quantity } = action.payload;
      const existPdtIndex = state.cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (existPdtIndex !== -1) {
        state.cartItems[existPdtIndex].quantity += quantity;
      } else {
        state.cartItems.push({ productId, quantity });
      }
      state.count = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    DELETE_PRODUCT_FROM_CART: (state, action) => {
      const { productId, quantity, isDeleteProduct } = action.payload;
      state.cartItems = state.cartItems
        .map((itm) => {
          if (itm.productId === productId) {
            if (!isDeleteProduct && itm.quantity - quantity > 0) {
              return { ...itm, quantity: itm.quantity - quantity };
            }
            return undefined;
          } else {
            return itm;
          }
        })
        .filter((item) => item !== undefined);
      state.count = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
});

export const { actions } = CartSlice;
export default CartSlice.reducer;
