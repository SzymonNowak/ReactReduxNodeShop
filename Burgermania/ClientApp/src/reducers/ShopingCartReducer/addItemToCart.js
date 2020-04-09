export const addItemToCart = (state, { type, payload }) => ({
  ...state,
  productsInCart: [...state.productsInCart, payload],
});
