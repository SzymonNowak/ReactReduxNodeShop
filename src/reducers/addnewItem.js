export const addNewItem = (state, action) => {
  return {
    ...state,
    products: [...state.products, action.payload.item]
  };
};
