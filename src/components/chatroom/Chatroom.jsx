import React, { useState } from "react";
import styles from "./Chatroom.module.css";
import { ChatroomMain } from "./ChatroomMain";
import { ChatroomUsers } from "./ChatroomUsers";
import { nanoid } from "nanoid";
import { InstantMessageModal } from "./InstantMessageModal";

export const Chatroom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetUser, setTargetUser] = useState(null);
  const roomName = "Bananas";
  const myUser = { username: "Tal", id: "12345678" };
  const users = [
    { username: "Moshe", id: nanoid() },
    { username: "Natan", id: nanoid() },
    { username: "Sior", id: nanoid() },
    { username: "Michal", id: nanoid() },
  ];
  const [messages, setMessages] = useState([
    { message: "hi", id: nanoid(), user: users[1] },
    { message: "hello", id: nanoid(), user: myUser },
    { message: "CRAZY", id: nanoid(), user: users[3] },
    { message: "YEAH!", id: nanoid(), user: users[2] },
  ]);
  const addMessage = (message) => {
    const newMessage = { message, id: myUser.id, user: myUser };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  const removeMessage = (messageToRemove) => {
    if (messageToRemove.user.id !== myUser.id) return;
    const filteredMessages = messages.filter(
      (message) => messageToRemove.id !== message.id
    );
    setMessages(filteredMessages);
  };

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
      <ChatroomMain
        roomName={roomName}
        messages={messages}
        myUser={myUser}
        addMessage={addMessage}
        removeMessage={removeMessage}
      />
      {isModalOpen && targetUser && (
        <InstantMessageModal
          toggleInstantMessageModal={toggleInstantMessageModal}
          user={targetUser}
        />
      )}
    </section>
  );
};
