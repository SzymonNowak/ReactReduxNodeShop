export const getProduct = (state, { type, payload }) => ({
  ...state,
  products: [...state.products, payload.data],
});
