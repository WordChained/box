import React, { useContext } from "react";
import { ChatroomsContext } from "../../store/contexts/ChatroomsContext";
import styles from "./Chatroom.module.css";
import { Message } from "./Message";

export const ChatroomMessages = ({ myUser }) => {
  const { chatroomState } = useContext(ChatroomsContext);
  const messages = chatroomState.messages;
  return (
    <div className={styles.chatroomMessages}>
      {messages.map((msg) => (
        <Message key={msg.id} msg={msg} />
      ))}
    </div>
  );
};
