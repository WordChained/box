import { nanoid } from "nanoid";
import React, { useState } from "react";
import styles from "./AddMessage.module.css";
export const AddMessage = ({ addMessage }) => {
  const [messageText, setMessageText] = useState("");
  const onAddMessage = (ev) => {
    ev.preventDefault();
    const message = ev.target.children[0].children[0].value.trim();
    if (message.length < 1) return;
    addMessage(message);
    ev.target.children[0].children[0].value = "";
    setMessageText("");
  };

  const onInput = (ev) => {
    setMessageText(ev.target.value);
  };

  return (
    <div className={styles.addMessageContainer}>
      <form onSubmit={onAddMessage}>
        <div>
          <input type="text" onInput={onInput} />
          <button disabled={!messageText.length}>Send</button>
        </div>
      </form>
    </div>
  );
};
