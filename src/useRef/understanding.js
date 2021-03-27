import React, { useEffect, useRef, useState } from 'react';
import { counterStyle } from '../style';

const Understanding = () => {
  const [count, setCount] = useState(6);

  const invincible = useRef(count);
  // { current: 'initial value of count -> 6' }

  useEffect(() => {
    let id = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(id);
  });

  return (
    <>
      <h1 style={counterStyle}>count: {count}</h1>
      <h1 style={counterStyle}>ref: {invincible.current}</h1>
    </>
  );
};

export default Understanding;
