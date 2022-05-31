import React, { useState } from 'react';
import styles from './EmailChecker.module.css';
import isEmail from 'validator/lib/isEmail';
export const EmailChecker = () => {
  const [goodEmail, setGoodEmail] = useState(true);

  const onInput = (ev) => {
    ev.preventDefault();
    // setGoodEmail(validate(ev.target.value.trim()));
    setGoodEmail(isEmail(ev.target.value.trim()));
  };
  const validate = (valueToValidate) => {
    const mailValidatorRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return mailValidatorRegex.test(valueToValidate);
  };

  return (
    <div className={styles.emailCheckerContainer}>
      <input
        className={goodEmail ? styles.good : styles.warning}
        type='text'
        onInput={onInput}
      />
    </div>
  );
};
