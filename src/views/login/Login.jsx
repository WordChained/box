import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import isEmail from 'validator/lib/isEmail';

export const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInputValid, setIisEmailInputValid] = useState(null);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(null);

  const onLogin = (ev) => {
    ev.preventDefault();

    if (!isEmail(email)) {
      setIisEmailInputValid(false);
    }
    if (password.length < 5) {
      setIsPasswordInputValid(false);
    }
  };

  const isEmailValidator = (ev) => {
    setEmail(ev.target.value);
    if (!isEmail(ev.target.value.trim())) setIisEmailInputValid(false);
    else {
      setIisEmailInputValid(true);
    }
  };
  const isPasswordValidator = (ev) => {
    setPassword(ev.target.value);
    if (ev.target.value.trim().length < 5) setIsPasswordInputValid(false);
    else {
      setIsPasswordInputValid(true);
    }
  };
  const isFormInvalid = () => {
    return email.length > 1 || password.length > 1;
  };
  return (
    <div className={styles.loginModal}>
      <form onSubmit={onLogin}>
        <h1>Login</h1>
        <input
          name='email'
          type='text'
          placeholder='Email'
          autoComplete='off'
          onInput={isEmailValidator}
          className={
            isEmailInputValid === null
              ? ''
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
          name='password'
          type='password'
          placeholder='Password'
          // minLength={5}
          className={
            isPasswordInputValid === null
              ? ''
              : isPasswordInputValid
              ? styles.valid
              : styles.invalid
          }
          onInput={isPasswordValidator}
        />
        {isPasswordInputValid !== null && !isPasswordInputValid && (
          <div className={styles.warningMessage}>*Not a valid password</div>
        )}
        <button disabled={isFormInvalid()}>Submit</button>
      </form>
      <span className={styles.toggleWindow}>
        Not a user yet? <span onClick={() => setIsLogin(false)}>Subscribe</span>
      </span>
    </div>
  );
};
