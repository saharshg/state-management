import React, { useEffect, useState } from 'react';
import { counterStyle } from '../style';

const Solution = () => {
  let [count, setCount] = useState(0);
  let [fastCount, setFastCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let id = setInterval(() => {
      setFastCount(fastCount + 1);
    }, 900);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1 style={counterStyle}>count: {count}</h1>
      <h1 style={counterStyle}>fast count: {fastCount}</h1>
    </>
  );
};

export default Solution;
