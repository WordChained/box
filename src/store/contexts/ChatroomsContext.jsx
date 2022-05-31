import { createContext, useReducer } from "react";
import {
  chatroomReducer,
  initialChatroomState,
} from "../reducers/chatroomReducer";

//just a "fake" starting object. to make it easier to see what i have inside the context
export const ChatroomsContext = createContext({
  // loggedInUser: {},
  // users: [],
  // messages: [],
});
//a wrapping react component that provides the context
//this will be wrapped as well in a "ChatroomLoader" just to easily send it to the router as a single element
export const ChatroomContextProvider = ({ children }) => {
  const [chatroomState, chatroomDispatch] = useReducer(
    chatroomReducer,
    initialChatroomState
  );
  return (
    <ChatroomsContext.Provider value={{ chatroomState, chatroomDispatch }}>
      {children}
    </ChatroomsContext.Provider>
  );
};
