import { actionTypes } from "../../constants/actionTypes";

const initialState = {
  productsInCart: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_ORDER:
      return null;
    default:
      return state;
  }
};

export default OrderReducer;
