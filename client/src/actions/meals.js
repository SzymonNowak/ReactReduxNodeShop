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

export const addMeal = (meal) => async (dispatch) => {
  try {
    const { data } = await api.addMeal(meal);
    dispatch({
      type: actionTypes.ADD_MEAL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateMeal = (meal) => async (dispatch) => {
  try {
    const { data } = await api.updateMeal(meal);
    dispatch({
      type: actionTypes.UPDATE_MEAL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
