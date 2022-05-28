import React from 'react';
import styles from './Chatroom.module.css';

export const ChatroomMessages = ({ messages, myUser }) => {
  return (
    <div className={styles.chatroomMessages}>
      {messages.map((msg) => (
        <div
          className={`${styles.message} ${
            msg.user.id === myUser.id ? styles.myMessage : ''
          }`}
          key={msg.id}
        >
          <span className={styles.name}>{msg.user.username}</span>
          {msg.message}
        </div>
      ))}
    </div>
  );
};
