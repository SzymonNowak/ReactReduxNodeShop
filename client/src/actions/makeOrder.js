import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

export const saveOrderToRedux = (order) => async (dispatch) => {
  try {
    await dispatch({
      type: actionTypes.SAVE_ORDER_TO_REDUX,
      payload: order,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const makeOrder = (order, socket) => async (dispatch) => {
  try {
    const data = await socket.emit("makeOrder", {
      order,
    });
    dispatch({
      type: actionTypes.MAKE_ORDER,
      payload: data.id,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const finishOrder = (orderId) => async (dispatch) => {
  try {
    const { data } = await api.finishOrder(orderId);
    dispatch({
      type: actionTypes.FINISH_ORDER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllNotFinishedOrders = () => async (dispatch) => {
  try {
    const { data } = await api.getAllNotFinishedOrders();
    dispatch({
      type: actionTypes.GET_ALL_NOT_FINISHED_ORDERS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
