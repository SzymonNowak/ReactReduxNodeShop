export const deleteNewItem = (state, action) => ({
  ...state,
  products: state.products.filter(
    (item) => item.id !== action.payload.id,
  ),
});
