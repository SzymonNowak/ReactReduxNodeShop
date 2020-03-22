export const addItemToCart = (state, action) => ({
  ...state,
  productsInCart: [...state.productsInCart, action.payload],
});
