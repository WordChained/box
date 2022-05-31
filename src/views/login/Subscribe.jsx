import React, { useContext, useState } from "react";
import styles from "./LoginPage.module.css";
import isEmail from "validator/lib/isEmail";
import { LoginContext } from "../../store/contexts/LoginContext";
import { subscribeAction } from "../../store/actions/loginActions";
import { nanoid } from "nanoid";
import { ChatroomsContext } from "../../store/contexts/ChatroomsContext";

export const Subscribe = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassowrd, setRepeatedPassword] = useState("");
  const [repeatedEmail, setRepeatedEmail] = useState("");
  const [isEmailInputValid, setIisEmailInputValid] = useState(null);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(null);
  const [isAgeInputValid, setIsAgeInputValid] = useState(null);
  const [isUsernameInputValid, setIsUsernameInputValid] = useState(null);
  const { loginState, loginDispatch } = useContext(LoginContext);
  const { chatroomState } = useContext(ChatroomsContext);

  const onLogin = (ev) => {
    ev.preventDefault();
    if (!isEmail(email)) setIisEmailInputValid(false);
    if (password.length < 5) setIsPasswordInputValid(false);
    if (age < 12) setIsAgeInputValid(false);
    if (username === "moshe") setIsUsernameInputValid(false);

    if (
      isEmailInputValid &&
      isPasswordInputValid &&
      isAgeInputValid &&
      isUsernameInputValid
    ) {
      console.log({ username, password, age, email });
      const user = chatroomState.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        loginDispatch(loginAction(user));
        navigate("/rooms");
      }
    }
  };

  const isEmailValidator = (ev) => {
    setEmail(ev.target.value);
    if (!ev.target.value.length) setIisEmailInputValid(null);
    else if (!isEmail(ev.target.value.trim())) setIisEmailInputValid(false);
    else setIisEmailInputValid(true);
  };
  const isPasswordValidator = (ev) => {
    setPassword(ev.target.value);
    if (!ev.target.value.length) setIsPasswordInputValid(null);
    else if (ev.target.value.trim().length < 5) setIsPasswordInputValid(false);
    else setIsPasswordInputValid(true);
  };
  const isFormInvalid = () => {
    const isFieldEmpty =
      email.length < 1 ||
      password.length < 1 ||
      repeatedEmail.length < 1 ||
      repeatedPassowrd.length < 1 ||
      age.length < 1 ||
      username < 1;

    const isFieldInvalid =
      !isEmailInputValid ||
      !isPasswordInputValid ||
      !isAgeInputValid ||
      !isUsernameInputValid;

    const isPasswordsMatch = password === repeatedPassowrd;
    const isEmailsMatch = email === repeatedEmail;
    return (
      !isPasswordsMatch || !isEmailsMatch || isFieldInvalid || isFieldEmpty
    );
  };

  const isUserNameValid = (ev) => {
    setUsername(ev.target.value);
    if (!ev.target.value.length) setIsUsernameInputValid(null);
    else if (ev.target.value === "moshe") setIsUsernameInputValid(false);
    else setIsUsernameInputValid(true);
  };
  const isAgeValid = (ev) => {
    setAge(ev.target.value);
    if (!ev.target.value.length) setIsAgeInputValid(null);
    else if (ev.target.value < 12) setIsAgeInputValid(false);
    else setIsAgeInputValid(true);
  };

  return (
    <div className={styles.loginModal}>
      <form onSubmit={onLogin}>
        <h1>Subscribe</h1>
        <input
          type="text"
          placeholder="User Name"
          onInput={isUserNameValid}
          className={
            isUsernameInputValid === null
              ? ""
              : isUsernameInputValid
              ? styles.valid
              : styles.invalid
          }
        />
        <input
          type="number"
          placeholder="Age"
          onInput={isAgeValid}
          min={12}
          max={121}
          className={
            isAgeInputValid === null
              ? ""
              : isAgeInputValid
              ? styles.valid
              : styles.invalid
          }
        />
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
        <input
          type="text"
          placeholder="Reapeat Email"
          onInput={(ev) => setRepeatedEmail(ev.target.value)}
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
        <input
          type="password"
          placeholder="Repeat password"
          onInput={(ev) => setRepeatedPassword(ev.target.value)}
        />
        {isPasswordInputValid !== null && !isPasswordInputValid && (
          <div className={styles.warningMessage}>*Not a valid password</div>
        )}
        <button className={styles.submitBtn} disabled={isFormInvalid()}>
          Submit
        </button>
      </form>
      <span className={styles.toggleWindow}>
        Already a user? <span onClick={() => setIsLogin(true)}>Login</span>
      </span>
    </div>
  );
};
