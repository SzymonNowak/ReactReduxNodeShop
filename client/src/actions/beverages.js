import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

export const getAllBeverages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBeverages();
    dispatch({
      type: actionTypes.FETCH_ALL_BEVERAGES,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const addBeverages = () => async (dispatch) => {};
