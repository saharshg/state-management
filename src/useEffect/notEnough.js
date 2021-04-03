import React, { useEffect, useState } from 'react';
import { counterStyle } from '../style';

const NotEnough = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  useEffect(() => {
    let id = setInterval(() => setCount1(count1 + 1), 1000);

    return () => clearInterval(id);
  });

  useEffect(() => {
    let id = setInterval(() => setCount2(count2 + 1), 900);

    return () => clearInterval(id);
  });

  return (
    <>
      <h1 style={counterStyle}>count1: {count1}</h1>
      <h1 style={counterStyle}>count2: {count2}</h1>
    </>
  );
};

export default NotEnough;
