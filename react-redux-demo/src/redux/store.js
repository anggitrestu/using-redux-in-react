import { createStore, compose } from 'redux';
import cakeReducer from './cake/cakeReducer';

const store = createStore(
  cakeReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
