import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

export const getAllSauces = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSauces();
    dispatch({
      type: actionTypes.FETCH_ALL_SAUCES,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const addSauce = () => async (dispatch) => {};
