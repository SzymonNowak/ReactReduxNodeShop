import { actionTypes } from "../../constants/actionTypes";
import LoginError, { loginError } from "./loginError";
const initialState = {
  authError: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return loginError(state, action);
    case actionTypes.LOGIN_ERROR:
      return loginError(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
