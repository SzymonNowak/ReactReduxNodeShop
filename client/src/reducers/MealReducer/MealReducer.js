import { actionTypes } from "../../constants/actionTypes";

const MealReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_MEALS:
      return action.payload;
    // case actionTypes.ADD_MEAL:
    //   return [...state, action.payload];
    case actionTypes.UPDATE_MEAL:
      return action.payload;

    default:
      return state;
  }
};

export default MealReducer;
