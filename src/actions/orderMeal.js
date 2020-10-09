import { actionTypes } from "../constants/actionTypes";

export const orderMeal = (order) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    addItemDeliveyToFiresoter(order, getFirestore)
      .then(() => {
        dispatchDeliveryInfo(dispatch, order);
      })
      .catch((err) => {
        dispatchError(dispatch, err);
      });
  };
};
const dispatchDeliveryInfo = (dispatch, order) => {
  dispatch({
    type: actionTypes.Order_Meal,
    payload: {
      ...order,
    },
  });
};

const dispatchError = (dispatch, err) => {
  dispatch({
    type: actionTypes.ADD_ITEM_ERROR,
    err,
  });
};

export const addItemDeliveyToFiresoter = (order, getFirestore) => {
  const firestore = getFirestore();
  return firestore.collection("deliveryInfo").add({
    ...order,
  });
};
