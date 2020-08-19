import { actionTypes } from "../constants/actionTypes";

export const addItem = (itemContent) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      item: {
        ...itemContent,
      },
    },
  };
};

// export const addItem = (itemContent) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {

//     console.log("lololololololol", getFirestore)
//     const firestore = getFirestore();
//     firestore.collection('burgers').add({
//       ...itemContent,
//       cout: 666,
//       price: 666,
//       description: "satan",
//       tittle: 'satan'
//     })
//       .then(() => {
//         dispatch({
//           type: actionTypes.ADD_ITEM,
//           payload: {
//             item: {
//               ...itemContent,
//             }
//           },
//         })
//       })
//       .catch(err => {
//         console.log(err)
//       })

//   }
// };
