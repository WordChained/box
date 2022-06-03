import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutAction } from "../../../store/actions/loginActions";
import { LoginContext } from "../../../store/contexts/LoginContext";
import styles from "./Header.module.css";
export const Header = () => {
  const { loginState, loginDispatch } = useContext(LoginContext);
  console.log(loginState);

  const onLogout = () => {
    loginDispatch(logoutAction());
  };

  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link to="/">Home</Link>
        <div className={styles.miniNav}>
          <Link to="/rooms">Rooms</Link>
          <Link to="/login" onClick={!loginState.user ? "" : onLogout}>
            {!loginState.user ? "Login" : "Logout"}
          </Link>
        </div>
      </nav>
    </header>
  );
};
