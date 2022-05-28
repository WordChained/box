import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Link to='about-us'>About Us</Link>
      <a>Contact Us</a>
    </div>
  );
};
