import React from 'react';
import { useParams } from 'react-router';
import { ChatroomContextProvider } from '../contexts/ChatroomsContext';
import { Chatroom } from '../../components/chatroom/Chatroom';

export const ChatroomLoader = () => {
  const { roomName } = useParams();
  return (
    <ChatroomContextProvider>
      <Chatroom roomName={roomName} />
    </ChatroomContextProvider>
  );
};
