export const addNewItem = (state, action) => ({
  ...state,
  products: [...state.products, action.payload.item],
});
