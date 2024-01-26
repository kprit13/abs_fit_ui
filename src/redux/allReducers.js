import { combineReducers } from 'redux';
import ProductCatalogReducer from './slices/ProductCatalogSlice'

const appReducer = combineReducers({
  ProductCatalog: ProductCatalogReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
