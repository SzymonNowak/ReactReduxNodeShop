import { actionTypes } from "../constants/actionTypes";
export const addItem = (itemContent) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("burgers")
      .add({
        ...itemContent,
      })
      .then(() => {
        dispatch({
          type: actionTypes.ADD_ITEM,
          payload: {
            item: {
              ...itemContent,
            },
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.ADD_ITEM_ERROR,
          err,
        });
      });
  };
};
