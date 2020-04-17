import { combineReducers } from 'redux'
import ProductReducer from './ProductReduer/ProductReducer';
import ShopingCartReducer from './ShopingCartReducer/ShopingCartReducer';
import AuthReducer from './AuthReducer/AuthReducer';


export default combineReducers({
    ProductReducer,
    ShopingCartReducer,
    AuthReducer
})