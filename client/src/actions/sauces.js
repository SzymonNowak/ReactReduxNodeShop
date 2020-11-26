import * as api from "../api/index";

export const getAllSauces = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSauces();
    dispatch({
      type: "FETCH_ALL_SAUCES",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
