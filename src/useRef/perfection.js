import React, { useEffect, useRef, useState } from 'react';
import { counterStyle } from '../style';

const Perfection = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const intervalCallback = () => setCount(count + 1);

  useEffect(() => {
    ref.current = intervalCallback;
  });

  useEffect(() => {
    let id = setInterval(() => ref.current(), 1000);
    return () => clearInterval(id);
  }, []);

  return <h1 style={counterStyle}>{count}</h1>;
};

export default Perfection;
