import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";

const AddonReducer = (state = db, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.FETCH_ALL_ADDONS:
      return action.payload;
    case actionTypes.ADD_ADDON:
      return [...state, action.payload];
    case actionTypes.UPDATE_ADDON:
      return action.payload;
    case actionTypes.DELETE_ADDON:
      return state.addons.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
};

export default AddonReducer;
