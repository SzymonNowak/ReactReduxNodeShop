import * as api from "../api/index";

export const getAllMeals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals();
    dispatch({
      type: "FETCH_ALL_MEALS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
