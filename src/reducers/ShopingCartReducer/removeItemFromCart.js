export const removeItemFromCart = (state, { type, payload }) => ({
  ...state,
  productsInCart: state.productsInCart.filter(
    (item, index) => index !== payload.id
  ),
});
