import { createSlice } from "@reduxjs/toolkit";

const ProductCatalog = createSlice({
  name: "ProductCatalog",
  initialState: {
    products: [],
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    RESET_PRODUCTS: (state, action) => {
      state.products = [];
    },
  },
});

export const { actions } = ProductCatalog;
export default ProductCatalog.reducer;
