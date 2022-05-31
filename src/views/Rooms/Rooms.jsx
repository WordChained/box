import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { CreateRoom } from "../../components/create-rooms/CreateRoom";
import styles from "./Rooms.module.css";

export const Rooms = () => {
  const roomsList = [
    {
      id: "123456",
      roomName: "Bananas",
      messages: [],
    },
  ];
  return (
    <div className={styles.roomsContainer}>
      {roomsList.map((room) => (
        <Link key={room.id} to={`room/${room.roomName}`}>
          <div className={styles.card}>{room.roomName}</div>
        </Link>
      ))}
      <div className={styles.createRoomForm}>
        <h3>Add a room:</h3>
        <CreateRoom />
      </div>
    </div>
  );
};
