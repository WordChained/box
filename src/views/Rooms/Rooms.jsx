import React from 'react';
import { Chatroom } from '../../components/chatroom/Chatroom';
import styles from './Rooms.module.css';

export const Rooms = () => {
  return (
    <div className={styles.roomsContainer}>
      <Chatroom />
    </div>
  );
};
