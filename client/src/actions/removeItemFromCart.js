import { actionTypes } from "../constants/actionTypes";

export const removeItemFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  };
};
