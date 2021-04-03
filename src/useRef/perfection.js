import React, { useEffect, useRef, useState } from 'react';
import { counterStyle } from '../style';

const Perfection = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current = () => setCount(count + 1);
  });

  useEffect(() => {
    let id = setInterval(() => ref.current(), 1000);
    return () => clearInterval(id);
  }, [count]);

  return <h1 style={counterStyle}>{count}</h1>;
};

export default Perfection;
