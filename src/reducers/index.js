 import {
  ShopItemActionType 
} from "./ShopItemActionType"

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopItemActionType.ADD_ITEM: 
      return addNewItem(state, action);
    case ShopItemActionType.REMOVE_ITEM:
      return deleteNewItem(state, action);
    case ShopItemActionType.TEST:
     return test(state, action);
    default:
      return state;
  }
}



const test = (state, action) => {
  console.log(action.payload.tittle);
}

const addNewItem = (state, action) => {
  return {
    ...state,
    products: [...state.products, action.payload.item]
  };
}

const deleteNewItem = (state, action) => {
  return {
    ...state,
    products: state.products.filter(item => item.id !== action.payload.id)
  };
}

const initialState = {
  products: []
};



export default rootReducer;