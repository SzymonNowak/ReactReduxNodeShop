export const loginError = (state, { type, payload }) => ({
  ...state,
  authError: "login failed",
});
