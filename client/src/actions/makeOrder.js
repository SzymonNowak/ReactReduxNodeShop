import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";
export const makeOrder = (ourOrder) => async (dispatch) => {
  try {
    const data = await api.makeOrder(ourOrder);
    dispatch({
      type: actionTypes.MAKE_ORDER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
