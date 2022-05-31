import React, { useContext, useState } from 'react';
import styles from './Chatroom.module.css';
import { ChatroomMain } from './ChatroomMain';
import { ChatroomUsers } from './chatroom-users/ChatroomUsers';
import { ChatroomsContext } from '../../store/contexts/ChatroomsContext';
import { InstantMessageModal } from './chatroom-users/InstantMessageModal';
export const Chatroom = ({ roomName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetUser, setTargetUser] = useState(null);
  const { chatroomState } = useContext(ChatroomsContext);
  const users = chatroomState.users;

  const toggleInstantMessageModal = (user = null) => {
    setTargetUser(user);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className={styles.chatroomContainer}>
      <ChatroomUsers
        users={users}
        toggleInstantMessageModal={toggleInstantMessageModal}
      />
      <ChatroomMain roomName={roomName} />
      {isModalOpen && targetUser && (
        <InstantMessageModal
          toggleInstantMessageModal={toggleInstantMessageModal}
          user={targetUser}
        />
      )}
    </section>
  );
};
