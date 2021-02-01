import { actionTypes } from "../../constants/actionTypes";

const initialState = {
  AllNotFinishedOrders: [],
  clientOrder: [],
  socketId: "",
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_NOT_FINISHED_ORDERS:
      return {
        AllNotFinishedOrders: [action.payload],
      };
    case actionTypes.MAKE_ORDER:
      return {
        socketId: [action.payload],
      };
    case actionTypes.SAVE_ORDER_TO_REDUX:
      return {
        clientOrder: [action.payload],
        socketId: [...state],
      };
    default:
      return state;
  }
};

export default OrderReducer;
