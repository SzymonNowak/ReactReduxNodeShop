export const deleteNewItem = (state, { type, payload }) => ({
  ...state,
  products: state.products.filter(
    (item) => item.id !== payload.id,
  ),
});
