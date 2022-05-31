import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { addMessageAction } from "../../store/actions/roomsActions";
import { ChatroomsContext } from "../../store/contexts/ChatroomsContext";
import styles from "./AddMessage.module.css";
export const AddMessage = ({ buttonText = "send" }) => {
  const [messageText, setMessageText] = useState("");
  const { chatroomState, chatroomDispatch } = useContext(ChatroomsContext);
  const onAddMessage = (ev) => {
    ev.preventDefault();
    const text = ev.target.children[0].children[0].value.trim();
    if (text.length < 1) return;
    const message = {
      message: text,
      id: nanoid(),
      user: chatroomState.loggedInUser,
    };
    chatroomDispatch(addMessageAction(message));
    ev.target.children[0].children[0].value = "";
    setMessageText("");
  };

  const onInput = (ev) => {
    setMessageText(ev.target.value);
  };

  return (
    <div className={styles.addMessageContainer}>
      <form onSubmit={onAddMessage}>
        <div>
          <input type="text" onInput={onInput} />
          <button disabled={!messageText.length}>{buttonText}</button>
        </div>
      </form>
    </div>
  );
};
