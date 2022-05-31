import { nanoid } from "nanoid";

export const initialChatroomState = {
  loggedInUser: {
    username: "Tal",
    id: "12345678",
    email: "tt@tt.tt",
    password: "12345",
  },
  users: [
    { username: "Moshe", id: "1", email: "tt2@tt2.tt2", password: "512f3" },
    { username: "Natan", id: "2", email: "ddgsdfs", password: "542" },
    { username: "Sior", id: "3", email: "asdadas", password: "1235" },
    { username: "Michal", id: "4", email: "sdfsdf", password: "55425" },
    { username: "Tal", id: "12345678", email: "tt@tt.tt", password: "12345" },
  ],
  messages: [
    { message: "hi", id: nanoid(), user: { username: "Moshe", id: "1" } },
    {
      message: "hello",
      id: nanoid(),
      user: { username: "Tal", id: "12345678" },
    },
    { message: "CRAZY", id: nanoid(), user: { username: "Natan", id: "2" } },
    { message: "YEAH!", id: nanoid(), user: { username: "Michal", id: "4" } },
  ],
};

export const chatroomReducer = (
  chatroomState = initialChatroomState,
  action
) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...chatroomState,
        messages: [...chatroomState.messages, action.message],
      };
    case "REMOVE_MESSAGE":
      return {
        ...chatroomState,
        messages: chatroomState.messages.filter(
          (message) => message.id !== action.messageId
        ),
      };
    case "CLEAR_MESSAGES":
      return {
        ...chatroomState,
        messages: [],
      };

    default:
      return roomState;
  }
};
