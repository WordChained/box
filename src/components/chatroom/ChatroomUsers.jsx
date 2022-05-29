import React, { useState } from "react";
import styles from "./Chatroom.module.css";
import { UsersFilter } from "./UsersFilter";
export const ChatroomUsers = ({ users, toggleInstantMessageModal }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  return (
    <div className={styles.chatroomUsersContainer}>
      <h3>Users</h3>
      <UsersFilter setFilteredUsers={setFilteredUsers} users={users} />
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className={styles.user}
          onClick={() => toggleInstantMessageModal(user)}
        >
          {user.username}
        </div>
      ))}
    </div>
  );
};
