export const addItemToCart = (state, action) => {
  return {
    ...state,
    productsInCart: [...state.productsInCart, action.payload]
  };
};
