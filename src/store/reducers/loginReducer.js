export const initialLoginState = {
  user: {},
};
export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
      };
    case "SUBSCRIBE":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
