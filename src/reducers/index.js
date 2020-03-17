 import {
  ShopItemActionType 
} from "./ShopItemActionType"

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopItemActionType.ADD_ITEM: 
      return addNewItem(state, action);
    case ShopItemActionType.REMOVE_ITEM:
      return deleteNewItem(state, action);
    case ShopItemActionType.ADD_ITEM_TO_CART:
      return addItemToCart(state, action)
    default:
      return state;
  }
}



const addNewItem = (state, action) => {
  return {
    ...state,
    products: [...state.products, action.payload.item]
  };
}
const addItemToCart = (state, action) => {
  return {
    ...state,
    productsInCart: [...state.productsInCart, action.payload]
  };
}

const deleteNewItem = (state, action) => {
  return {
    ...state,
    products: state.products.filter(item => item.id !== action.payload.id)
  };
}

const initialState = {
  products: [],
  productsInCart: [],
  cart: 0,
};



export default rootReducer;