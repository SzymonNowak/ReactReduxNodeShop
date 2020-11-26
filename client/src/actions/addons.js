import * as api from "../api/index";

export const getAllAddons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAddons();
    dispatch({
      type: "FETCH_ALL_ADDONS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
