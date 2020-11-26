// import { actionTypes } from "../constants/actionTypes";
// import { addItemToFirestore } from "../services/addItemToFirestore";

// export const addItem = (itemContent, collectionName) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     addItemToFirestore(collectionName, itemContent, getFirestore)
//       .then(() => {
//         dispatchItemContent(dispatch, itemContent);
//       })
//       .catch((err) => {
//         dispatchError(dispatch, err);
//       });
//   };
// };

// const dispatchItemContent = (dispatch, itemContent) => {
//   dispatch({
//     type: actionTypes.ADD_ITEM,
//     payload: {
//       item: {
//         ...itemContent,
//       },
//     },
//   });
// };

// const dispatchError = (dispatch, err) => {
//   dispatch({
//     type: actionTypes.ADD_ITEM_ERROR,
//     err,
//   });
// };
