import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";

const BeveragesReducer = (state = db, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_BEVERAGES:
      return action.payload;
    case actionTypes.ADD_BEVERAGES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default BeveragesReducer;
