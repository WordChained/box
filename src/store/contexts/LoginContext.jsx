import React, { createContext, useReducer } from "react";
import { initialLoginState, loginReducer } from "../reducers/loginReducer";

export const LoginContext = createContext({});

export const LoginContextProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState
  );
  return (
    <LoginContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
