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

export const addAddons = (addon) => async (dispatch) => {
  try {
    const { data } = await api.addAddon(addon);
    dispatch({
      type: actionTypes.ADD_ADDON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAddon = (meal) => async (dispatch) => {
  try {
    const { data } = await api.updateAddon(meal);
    dispatch({
      type: actionTypes.UPDATE_ADDON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAddon = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteAddon(id);
    dispatch({
      type: actionTypes.DELETE_ADDON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
