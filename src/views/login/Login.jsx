import React, { useContext, useState } from "react";
import styles from "./LoginPage.module.css";
import isEmail from "validator/lib/isEmail";
import { LoginContext } from "../../store/contexts/LoginContext";
import { loginAction } from "../../store/actions/loginActions";
import { ChatroomsContext } from "../../store/contexts/ChatroomsContext";
import { useNavigate } from "react-router";

export const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInputValid, setIisEmailInputValid] = useState(null);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(null);
  const { loginState, loginDispatch } = useContext(LoginContext);
  const { chatroomState } = useContext(ChatroomsContext);
  const onLogin = (ev) => {
    ev.preventDefault();
    if (!isEmail(email)) {
      setIisEmailInputValid(false);
    }
    if (password.length < 5) {
      setIsPasswordInputValid(false);
    }
    if (!isEmailInputValid || !isPasswordInputValid) return;

    const user = chatroomState.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      loginDispatch(loginAction(user));
      navigate("/rooms");
    }
  };

  const isEmailValidator = (ev) => {
    setEmail(ev.target.value);
    if (ev.target.value.length === 0) setIisEmailInputValid(null);
    else if (!isEmail(ev.target.value.trim())) setIisEmailInputValid(false);
    else {
      setIisEmailInputValid(true);
    }
  };
  const isPasswordValidator = (ev) => {
    setPassword(ev.target.value);
    if (ev.target.value.length === 0) setIsPasswordInputValid(null);
    else if (ev.target.value.trim().length < 5) setIsPasswordInputValid(false);
    else {
      setIsPasswordInputValid(true);
    }
  };
  const isFormInvalid = () => {
    const isEmpty = email.length < 1 || password.length < 1;
    return !isEmpty && isEmailInputValid && isPasswordInputValid;
  };
  return (
    <div className={styles.loginModal}>
      <form onSubmit={onLogin}>
        <h1>Login</h1>
        <input
          name="email"
          type="text"
          placeholder="Email"
          autoComplete="off"
          onInput={isEmailValidator}
          className={
            isEmailInputValid === null
              ? ""
              : isEmailInputValid
              ? styles.valid
              : styles.invalid
          }
        />
        {isEmailInputValid !== null && !isEmailInputValid && (
          <div className={styles.warningMessage}>
            *Please enter a valid email
          </div>
        )}
        <input
          name="password"
          type="password"
          placeholder="Password"
          // minLength={5}
          className={
            isPasswordInputValid === null
              ? ""
              : isPasswordInputValid
              ? styles.valid
              : styles.invalid
          }
          onInput={isPasswordValidator}
        />
        {isPasswordInputValid !== null && !isPasswordInputValid && (
          <div className={styles.warningMessage}>*Not a valid password</div>
        )}
        <button className={styles.loginButton} disabled={!isFormInvalid()}>
          Submit
        </button>
      </form>
      <span className={styles.toggleWindow}>
        Not a user yet? <span onClick={() => setIsLogin(false)}>Subscribe</span>
      </span>
    </div>
  );
};
