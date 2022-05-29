import React from 'react';
import { AddMessage } from '../chatroom/AddMessage';
import styles from './CreateRoom.module.css';
export const CreateRoom = () => {
  const createRoom = (roomName) => {
    console.log(roomName);
  };
  return (
    <div className={styles.createRoomContainer}>
      <AddMessage addMessage={createRoom} buttonText={'Add'} />
    </div>
  );
};
