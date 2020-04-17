import { actionTypes } from "../constants/actionTypes";

export const removeItem = id => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: {
      tittle
    }
  };
};
