import React, { useState } from 'react';
import styles from './Chatroom.module.css';
import { ChatroomMain } from './ChatroomMain';
import { ChatroomUsers } from './ChatroomUsers';
import { nanoid } from 'nanoid';

export const Chatroom = () => {
  const roomName = 'Bananas';
  const myUser = { username: 'Tal', id: nanoid() };
  const users = [
    { username: 'Moshe', id: nanoid() },
    { username: 'Natan', id: nanoid() },
    { username: 'Sior', id: nanoid() },
    { username: 'Michal', id: nanoid() },
  ];
  const [messages, setMessages] = useState([
    { message: 'hi', id: nanoid(), user: users[1] },
    { message: 'hello', id: nanoid(), user: myUser },
    { message: 'CRAZY', id: nanoid(), user: users[3] },
    { message: 'YEAH!', id: nanoid(), user: users[2] },
  ]);
  return (
    <section className={styles.chatroomContainer}>
      <ChatroomUsers users={users} />
      <ChatroomMain roomName={roomName} messages={messages} myUser={myUser} />
    </section>
  );
};
