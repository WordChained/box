import React from 'react';
import { AddMessage } from './add-message/AddMessage';
import styles from './Chatroom.module.css';
import { ChatroomMessages } from './chatroom-messages/ChatroomMessages';
export const ChatroomMain = ({ roomName }) => {
  return (
    <div className={styles.chatroomMainContainer}>
      <h3>Room Name: {roomName}</h3>
      <ChatroomMessages />
      <AddMessage />
    </div>
  );
};
