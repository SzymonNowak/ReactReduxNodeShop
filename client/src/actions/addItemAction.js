import { actionTypes } from '../constants/actionTypes';

export const addItem = (itemContent) => {
  const getId = () => `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
