import React, { useContext, useState } from "react";
import styles from "./Chatroom.module.css";
import { ChatroomMain } from "./ChatroomMain";
import { ChatroomUsers } from "./ChatroomUsers";
import { nanoid } from "nanoid";
import { InstantMessageModal } from "./InstantMessageModal";
import { useParams } from "react-router";
import { ChatroomsContext } from "../../store/contexts/ChatroomsContext";

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
