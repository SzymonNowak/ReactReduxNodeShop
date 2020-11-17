import { actionTypes } from "../../constants/actionTypes";
import { addNewItem } from "./addnewItem";
import { deleteNewItem } from "./deleteItem";
import { handleAddNewItemError } from "./handleAddNewItemError";
import { db } from "../../initialStates/productState";

const ProductReducer = (state = db, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return addNewItem(state, action);
    case actionTypes.REMOVE_ITEM:
      return deleteNewItem(state, action);
    case actionTypes.ADD_ITEM_ERROR:
      return handleAddNewItemError(state, action);
    default:
      return state;
  }
};

export default ProductReducer;
