import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

export const getAllMeals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals();
    dispatch({
      type: actionTypes.FETCH_ALL_MEALS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
