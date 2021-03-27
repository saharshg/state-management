import React, { useEffect, useRef, useState } from 'react';
import { counterStyle } from '../style';

const Proof = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const [fastCount, setFastCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setFastCount(fastCount + 1);
    }, 900);

    return () => clearInterval(id);
  });

  useEffect(() => {
    ref.current = () => {
      setCount(count + 1);
    };
  });

  useEffect(() => {
    let id = setInterval(() => ref.current(), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1 style={counterStyle}>count: {count}</h1>
      <h1 style={counterStyle}>fastCount: {fastCount}</h1>
    </>
  );
};

export default Proof;
