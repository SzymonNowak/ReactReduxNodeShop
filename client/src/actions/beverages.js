import * as api from "../api/index";

export const getAllBeverages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBeverages();
    dispatch({
      type: "FETCH_ALL_BEVERAGES",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
