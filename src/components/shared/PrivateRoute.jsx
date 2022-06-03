import { useContext } from 'react';
import { Navigate, Route } from 'react-router';
import { LoginContext } from '../../store/contexts/LoginContext';
export const PrivateRoute = ({ children }) => {
  const { loginState } = useContext(LoginContext);
  return loginState.user ? children : <Navigate replace to='/login' />;
};
