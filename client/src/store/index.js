import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import shopApp from "../reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  shopApp,
  compose(composeEnhancer(applyMiddleware(thunk.withExtraArgument())))
);

export default store;
