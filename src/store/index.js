import { createStore } from "redux";
import shopApp from '../reducers/index';

const store = createStore(
  shopApp /* preloadedState, */ , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
