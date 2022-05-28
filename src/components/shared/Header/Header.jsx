import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link to='/'>Home</Link>
        <div className={styles.miniNav}>
          <Link to='/rooms'>Rooms</Link>
          <Link to='/login'>Login</Link>
        </div>
      </nav>
    </header>
  );
};
