import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";
const ProductReducer = (state = db, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return action.payload;
    case "CLEAN_FORM":
      return action.payload;
    case actionTypes.ADD_MEAL:
      return action.payload;
    default:
      return state;
  }
};

export default ProductReducer;
