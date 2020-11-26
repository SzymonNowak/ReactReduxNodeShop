import { combineReducers } from "redux";
import ShopingCartReducer from "./ShopingCartReducer/ShopingCartReducer";
import ProductReducer from "./ProductReduer/ProductReducer";
import DeliverReducer from "./DeliveryReducer/DeliveryInfo";

export default combineReducers({
  ProductReducer,
  ShopingCartReducer,
  DeliverReducer,
});
