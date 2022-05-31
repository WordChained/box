import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../store/actions/loginActions';
import { LoginContext } from '../../../store/contexts/LoginContext';
import styles from './Header.module.css';
import { useNavigate } from 'react-router';
export const Header = () => {
  const { loginState, loginDispatch } = useContext(LoginContext);
  const [loginTitle, setLoginTitle] = useState('Login');
  console.log(loginState);
  const navigate = useNavigate();
  const onLogout = () => {
    loginDispatch(logoutAction());
    navigate('/login');
  };
  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link to='/'>Home</Link>
        <div className={styles.miniNav}>
          <Link to='/rooms'>Rooms</Link>
          {!loginState.user ? (
            <Link to='/login'>Login</Link>
          ) : (
            <a onClick={onLogout}>Logout</a>
          )}
        </div>
      </nav>
    </header>
  );
};
