import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import ShopingCartReducer from "./ShopingCartReducer/ShopingCartReducer";
import AuthReducer from "./AuthReducer/AuthReducer";
import ProductReducer from "./ProductReduer/ProductReducer";
import DeliverReducer from "./DeliveryReducer/DeliveryInfo";

export default combineReducers({
  ProductReducer,
  ShopingCartReducer,
  AuthReducer,
  firebaseReducer,
  firestoreReducer,
  DeliverReducer,
});
