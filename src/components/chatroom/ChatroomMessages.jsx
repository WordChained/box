import React from "react";
import styles from "./Chatroom.module.css";
import { Message } from "./Message";

export const ChatroomMessages = ({ messages, myUser, removeMessage }) => {
  return (
    <div className={styles.chatroomMessages}>
      {messages.map((msg) => (
        <Message
          key={msg.id}
          msg={msg}
          myUser={myUser}
          removeMessage={removeMessage}
        />
      ))}
    </div>
  );
};
