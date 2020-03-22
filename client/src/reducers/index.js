import { actionTypes } from '../constants/actionTypes';
import { addNewItem } from './addnewItem';
import { addItemToCart } from './addItemToCart';
import { deleteNewItem } from './deleteItem';

const initialState = {
  products: [],
  productsInCart: [],
  cart: 0,
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return addNewItem(state, action);
    case actionTypes.REMOVE_ITEM:
      return deleteNewItem(state, action);
    case actionTypes.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);
    default:
      return state;
  }
};


export default rootReducer;
