export const removeItemFromCart = (state, { type, payload }) => ({
  ...state,
  productsInCart: state.productsInCart.filter((item) => item.id !== payload.id),
});
