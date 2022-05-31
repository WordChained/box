import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import isEmail from "validator/lib/isEmail";
import { Navigate } from "react-router";
import { Login } from "./Login";
import { Subscribe } from "./Subscribe";
import { ChatroomContextProvider } from "../../store/contexts/ChatroomsContext";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <ChatroomContextProvider>
      <section className={styles.loginContainer}>
        {isLogin && <Login setIsLogin={setIsLogin} />}
        {!isLogin && <Subscribe setIsLogin={setIsLogin} />}
      </section>
    </ChatroomContextProvider>
  );
};
