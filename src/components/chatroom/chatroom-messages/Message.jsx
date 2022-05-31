import React, { useContext } from 'react';
import { removeMessageAction } from '../../../store/actions/roomsActions';
import { ChatroomsContext } from '../../../store/contexts/ChatroomsContext';
import styles from '../Chatroom.module.css';

export const Message = ({ msg }) => {
  const { chatroomState, chatroomDispatch } = useContext(ChatroomsContext);
  const myUser = chatroomState.loggedInUser;
  const removeMessage = () => {
    chatroomDispatch(removeMessageAction(msg.id));
  };
  return (
    <div
      className={`${styles.message} ${
        msg.user.id === myUser.id ? styles.myMessage : ''
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
