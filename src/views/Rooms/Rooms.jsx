import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router-dom';
import { CreateRoom } from '../../components/create-rooms/CreateRoom';
// import { Chatroom } from '../../components/chatroom/Chatroom';
import styles from './Rooms.module.css';

export const Rooms = () => {
  const myUser = { username: 'Tal', id: '12345678' };
  const users = [
    { username: 'Moshe', id: nanoid() },
    { username: 'Natan', id: nanoid() },
    { username: 'Sior', id: nanoid() },
    { username: 'Michal', id: nanoid() },
  ];
  const roomsList = [
    {
      id: '123456',
      roomName: 'Bananas',
      messages: [
        { message: 'hi', id: nanoid(), user: users[1] },
        { message: 'hello', id: nanoid(), user: myUser },
        { message: 'CRAZY', id: nanoid(), user: users[3] },
        { message: 'YEAH!', id: nanoid(), user: users[2] },
      ],
    },
  ];
  return (
    <div className={styles.roomsContainer}>
      {roomsList.map((room) => (
        <Link key={room.id} to={`room/:${room.id}`}>
          <div className={styles.card}>{room.roomName}</div>
        </Link>
      ))}
      <div className={styles.createRoomForm}>
        <h3>Add a room:</h3>
        <CreateRoom />
      </div>
      {/* <Chatroom /> */}
    </div>
  );
};
