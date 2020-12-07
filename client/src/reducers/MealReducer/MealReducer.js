import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";

const MealReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_MEALS:
      return action.payload;
    case actionTypes.ADD_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default MealReducer;
