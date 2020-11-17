import { actionTypes } from "../../constants/actionTypes";
import { orderMeal } from "./orderMeal";

const initialState = {
  deliveryInfo: [],
};

const DeliveryInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Order_Meal:
      return orderMeal(state, action);
    default:
      return state;
  }
};

export default DeliveryInfo;
