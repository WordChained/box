import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../store/contexts/LoginContext";
import styles from "./Header.module.css";
export const Header = () => {
  const { loginState } = useContext(LoginContext);
  const [loginTitle, setLoginTitle] = useState("Login");
  console.log(loginState);
  useEffect(() => {
    if (loginState.user) setLoginTitle("Logout");
    else setLoginTitle("Login");
  }, [loginState.user]);

  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link to="/">Home</Link>
        <div className={styles.miniNav}>
          <Link to="/rooms">Rooms</Link>
          <Link to="/login">{loginTitle}</Link>
        </div>
      </nav>
    </header>
  );
};
