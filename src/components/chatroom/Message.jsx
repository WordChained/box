import React from "react";
import styles from "./Chatroom.module.css";

export const Message = ({ msg, myUser, removeMessage }) => {
  return (
    <div
      className={`${styles.message} ${
        msg.user.id === myUser.id ? styles.myMessage : ""
      }`}
    >
      <span className={styles.name}>{msg.user.username}</span>
      {msg.message}
      {msg.user.id === myUser.id && (
        <span className={styles.remove} onClick={() => removeMessage(msg)}>
          ❌
        </span>
      )}
    </div>
  );
};
