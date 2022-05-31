import React from 'react';
import styles from './Checkers.module.css';

export const Square = ({ square, i, PieceToShow, togglePiece }) => {
  return (
    <div
      key={square.id}
      onClick={() => togglePiece(i)}
      className={`${styles.square} ${
        square.color === 'b' ? styles.black : styles.grey
      }`}
    >
      {PieceToShow === i && <div className={styles.piece}></div>}
    </div>
  );
};
