import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

export const getAllAddons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAddons();
    dispatch({
      type: actionTypes.FETCH_ALL_ADDONS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
