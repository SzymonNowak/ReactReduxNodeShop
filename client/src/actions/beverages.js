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
export const addBeverages = (beverages) => async (dispatch) => {
  try {
    const { data } = await api.addBeverages(beverages);
    dispatch({
      type: actionTypes.ADD_BEVERAGES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateBeverage = (meal) => async (dispatch) => {
  try {
    const { data } = await api.updateBeverage(meal);
    dispatch({
      type: actionTypes.UPDATE_BEVERAGE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
