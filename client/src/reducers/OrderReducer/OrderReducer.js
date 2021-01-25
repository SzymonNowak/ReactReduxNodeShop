import { actionTypes } from "../../constants/actionTypes";

const initialState = [];

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default OrderReducer;
