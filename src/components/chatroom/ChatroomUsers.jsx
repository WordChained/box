import React, { useContext, useState } from "react";
import { ChatroomsContext } from "../../store/contexts/ChatroomsContext";
import styles from "./Chatroom.module.css";
import { UsersFilter } from "./UsersFilter";
export const ChatroomUsers = ({ toggleInstantMessageModal }) => {
  const { chatroomState } = useContext(ChatroomsContext);
  const users = chatroomState.users;
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
