import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer'
import ShopingCartReducer from './ShopingCartReducer'


export default combineReducers({
    ProductReducer,
    ShopingCartReducer
})