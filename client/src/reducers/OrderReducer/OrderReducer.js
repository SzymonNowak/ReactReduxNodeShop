import { actionTypes } from "../../constants/actionTypes";

const initialState = {
  AllNotFinishedOrders: [],
  clientOrder: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_ORDER:
      return [...state, action.payload];
    case actionTypes.GET_ALL_NOT_FINISHED_ORDERS:
      return {
        AllNotFinishedOrders: [action.payload],
      };
    default:
      return state;
  }
};

export default OrderReducer;
