import { combineReducers } from "redux";
import ProductCatalogReducer from "./slices/ProductCatalogSlice";
import CartReducer from "./slices/CartSlice";

const appReducer = combineReducers({
  ProductCatalog: ProductCatalogReducer,
  Cart: CartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STORE") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
