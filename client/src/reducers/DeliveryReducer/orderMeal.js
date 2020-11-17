export const orderMeal = (state, { type, payload }) => ({
  ...state,
  deliveryInfo: [...state.deliveryInfo, payload],
});
