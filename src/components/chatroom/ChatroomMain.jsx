import React from 'react';
import styles from './Chatroom.module.css';
import { ChatroomMessages } from './ChatroomMessages';
export const ChatroomMain = ({ roomName, messages, myUser }) => {
  return (
    <div className={styles.chatroomMainContainer}>
      <h3>Room Name: {roomName}</h3>
      <ChatroomMessages messages={messages} myUser={myUser} />
    </div>
  );
};
