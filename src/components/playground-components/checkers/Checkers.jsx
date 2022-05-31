import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import styles from './Checkers.module.css';
import { Square } from './Square';
export const Checkers = () => {
  const [PieceToShow, setPieceToShow] = useState(-1);
  const boardArr = [];

  for (let i = 0; i < 64; i++) {
    const isEvenRow = Math.floor(i / 8) % 2 === 0;
    const isEvenColumn = i % 2 === 0;
    let color;
    if (isEvenRow) color = isEvenColumn ? 'w' : 'b';
    else color = isEvenColumn ? 'b' : 'w';
    boardArr.push({ id: nanoid(), color });
  }

  const togglePiece = (index) => {
    if (PieceToShow === +index) {
      setPieceToShow(-1);
      return;
    }
    setPieceToShow(-1);
    setPieceToShow(+index);
  };

  return (
    <div className={styles.checkersContainer}>
      {boardArr.map((square, i) => (
        <Square
          key={square.id}
          square={square}
          i={i}
          PieceToShow={PieceToShow}
          togglePiece={togglePiece}
        />
      ))}
    </div>
  );
};
