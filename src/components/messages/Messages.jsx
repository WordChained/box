import { nanoid } from 'nanoid';
import React, { useState, useRef } from 'react';
import styles from './Messages.module.css';
export const Messages = () => {
  const msgRef = useRef();
  const [messages, setMessages] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const newMessage = { text: ev.target.children[0].value, id: nanoid() };
    setMessages((previousMsgs) => [...previousMsgs, newMessage]);
    msgRef.current.value = '';
  };
  const isInputEmptyOnInput = (ev) => {
    if (ev.target.value.length > 0 && isInputEmpty) setIsInputEmpty(false);
    else if (!isInputEmpty && !ev.target.value.length) setIsInputEmpty(true);
  };
  return (
    <div className={styles.messagesContainer}>
      <form onSubmit={onSubmit}>
        <input ref={msgRef} type='text' onInput={isInputEmptyOnInput} />
        <button disabled={isInputEmpty}>Send</button>
      </form>
      <div className={styles.messageBoard}>
        {!messages.length && <div>No messages yet!</div>}
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </div>
    </div>
  );
};
