import { combineReducers } from 'redux';

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
