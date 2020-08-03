export const deleteNewItem = (state, { type, payload }) => ({
  ...state,
  products: state.products.filter((item) => item.tittle !== payload.tittle),
});
