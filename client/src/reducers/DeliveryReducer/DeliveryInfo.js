import { actionTypes } from "../../constants/actionTypes";

const initialState = {
  deliveryInfo: {},
};

const DeliveryInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ADRESS_INFO:
      return {
        deliveryInfo: payload,
      };
    default:
      return state;
  }
};

export default DeliveryInfo;
