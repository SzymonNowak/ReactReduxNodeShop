import {
  ShopItemActionType
} from "../reducers/ShopItemActionType";

export const removeItem = (id) => {
    return {
        type: ShopItemActionType.REMOVE_ITEM,
        payload: {
            id
        }
    }
}

export const addItem = (itemContent) => {
    const getId = () =>
     `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;

  return {
    type: ShopItemActionType.ADD_ITEM,
    payload: {
      item: {
        id: getId(),
        ...itemContent
      }
    }
  };
};



