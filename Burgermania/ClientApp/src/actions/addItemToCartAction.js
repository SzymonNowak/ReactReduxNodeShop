import { actionTypes } from "../constants/actionTypes";

export const addItemToCart = item => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: {
      ...item
    }
  };
};
