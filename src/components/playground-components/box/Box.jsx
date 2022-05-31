import React, { useRef, useState } from 'react';
import styles from './Box.module.css';
export const Box = () => {
  const spanRef = useRef();
  const [boxColor, setBoxColor] = useState('white');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMouseLeave = () => {
    setX('Bye');
    setY('Bye');
  };
  const onMouseMove = (ev) => {
    setY(ev.nativeEvent.offsetY < 0 ? 0 : ev.nativeEvent.offsetY);
    setX(ev.nativeEvent.offsetX < 0 ? 0 : ev.nativeEvent.offsetX);
    if (ev.nativeEvent.offsetY > 250 && ev.nativeEvent.offsetX > 250)
      setBoxColor('yellow');
    else if (ev.nativeEvent.offsetY < 250 && ev.nativeEvent.offsetX < 250)
      setBoxColor('white');
    else if (ev.nativeEvent.offsetY > 250 && ev.nativeEvent.offsetX < 250)
      setBoxColor('red');
    else if (ev.nativeEvent.offsetY < 250 && ev.nativeEvent.offsetX > 250)
      setBoxColor('blue');
  };

  return (
    <div
      style={{ backgroundColor: boxColor }}
      className={styles.boxContainer}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span ref={spanRef}>
        x:{x} y:{y}
      </span>
    </div>
  );
};
