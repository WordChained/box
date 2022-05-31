import React from "react";
import styles from "./UsersFilter.module.css";
export const UsersFilter = ({ setFilteredUsers, users }) => {
  let timeout;
  const debouncer = (ev) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!ev.target.value.length) setFilteredUsers(users);
      else {
        setFilteredUsers(
          users.filter((user) =>
            user.username.toLowerCase().includes(ev.target.value.toLowerCase())
          )
        );
      }
    }, 500);
  };

  return (
    <div className={styles.usersFilterContainer}>
      <input type="text" placeholder="Search Users..." onInput={debouncer} />
    </div>
  );
};
