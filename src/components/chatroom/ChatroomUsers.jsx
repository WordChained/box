import React from 'react';
import styles from './Chatroom.module.css';
export const ChatroomUsers = ({ users }) => {
  return (
    <div className={styles.chatroomUsersContainer}>
      <h3>Users</h3>
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          {user.username}
        </div>
      ))}
    </div>
  );
};
