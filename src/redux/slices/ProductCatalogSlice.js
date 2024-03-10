import { createSlice } from "@reduxjs/toolkit";

const ProductCatalog = createSlice({
  name: "ProductCatalog",
  initialState: {
    products: [],
    selectedProductId: "",
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    RESET_PRODUCTS: (state, action) => {
      state.products = [];
    },
    SET_SELECTED_PRODUCT: (state, action) => {
      state.selectedProductId = action.payload;
    },
  },
});

export const { actions } = ProductCatalog;
export default ProductCatalog.reducer;
