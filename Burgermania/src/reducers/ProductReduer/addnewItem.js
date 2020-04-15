export const addNewItem = (state, { type, payload }) => ({
  ...state,
  products: [...state.products, payload.item],
});
