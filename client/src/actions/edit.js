import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";
export const getProduct = (id, collection) => async (dispatch) => {
  try {
    const { data } = await api.getSingleProduct(id, collection);
    dispatch({
      type: actionTypes.GET_PRODUCT,
      payload: data,
    });
  } catch (error) {}
};

export const cleanForm = () => {
  return {
    type: "CLEAN_FORM",
    payload: {},
  };
};
