import { actionTypes } from '../constants/actionTypes';
import { addItemToCart } from './addItemToCart';

const initialState = {
    productsInCart: [],
};


const ShopingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            return addItemToCart(state, action);
        default:
            return state;
    }
};


export default ShopingCartReducer;
