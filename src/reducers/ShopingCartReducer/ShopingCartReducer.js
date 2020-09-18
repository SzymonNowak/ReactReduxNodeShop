import { actionTypes } from "../../constants/actionTypes";
import { addItemToCart } from "./addItemToCart";
import { removeItemFromCart } from "./removeItemFromCart";

const initialState = {
  productsInCart: [],
};

const ShopingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return removeItemFromCart(state, action);
    default:
      return state;
  }
};

export default ShopingCartReducer;
