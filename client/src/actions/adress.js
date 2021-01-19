import { actionTypes } from "../constants/actionTypes";
export const addAdress = (adress) => {
  return {
    type: actionTypes.ADD_ADRESS_INFO,
    payload: {
      ...adress,
    },
  };
};
