import React from "react";
import { AddMessage } from "./AddMessage";
import styles from "./InstantMessageModal.module.css";
import userIcon from "../../assets/imgs/user.png";
export const InstantMessageModal = ({ user, toggleInstantMessageModal }) => {
  const addMessage = () => {
    toggleInstantMessageModal(null);
  };

  const closeModal = (ev) => {
    if (ev.target.id !== "coverscreen") return;
    toggleInstantMessageModal();
  };

  return (
    <div
      id="coverscreen"
      className={styles.backgroundCover}
      onClick={closeModal}
    >
      <div className={styles.instantMessageModalContainer}>
        <h3>Private Message</h3>
        <div className={styles.user}>
          <img src={userIcon} alt="" />
          <span>{user.username}</span>
        </div>
        <AddMessage addMessage={addMessage} />
      </div>
    </div>
  );
};
