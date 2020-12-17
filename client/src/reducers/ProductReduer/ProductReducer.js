import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";
const ProductReducer = (state = db, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default ProductReducer;
