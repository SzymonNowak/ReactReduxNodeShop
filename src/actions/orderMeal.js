import { actionTypes } from "../constants/actionTypes";

export const orderMeal = (deliveryInfo) => {
  return {
    type: actionTypes.Order_Meal,
    payload: {
      ...deliveryInfo,
    },
  };
};
