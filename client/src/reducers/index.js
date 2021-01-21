import { combineReducers } from "redux";
import ShopingCartReducer from "./ShopingCartReducer/ShopingCartReducer";
import ProductReducer from "./ProductReduer/ProductReducer";
import DeliverReducer from "./DeliveryReducer/DeliveryInfo";
import MealReducer from "./MealReducer/MealReducer";
import AddonReducer from "./AddonReducer/AddonReducer";
import BeveragesReducer from "./BeveragesReducer/BeveragesReducer";
import SauceReducer from "./SauceReducer/SauceReducer";
import OrderReducer from "./OrderReducer/OrderReducer";
export default combineReducers({
  MealReducer,
  AddonReducer,
  BeveragesReducer,
  SauceReducer,
  ProductReducer,
  ShopingCartReducer,
  DeliverReducer,
  OrderReducer,
});
