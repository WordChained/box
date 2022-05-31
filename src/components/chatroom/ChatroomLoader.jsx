import React from "react";
import { useParams } from "react-router";
import { ChatroomContextProvider } from "../../store/contexts/ChatroomsContext";
import { Chatroom } from "./Chatroom";

export const ChatroomLoader = () => {
  const { roomName } = useParams();
  return (
    <ChatroomContextProvider>
      <Chatroom roomName={roomName} />
    </ChatroomContextProvider>
  );
};
