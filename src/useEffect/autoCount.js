import React, { useEffect, useState } from 'react';
import { counterStyle } from '../style';

const Count = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => setCount(count + 1), 1000);

    return () => clearInterval(id);
  });

  return <h1 style={counterStyle}>{count}</h1>;
};

export default Count;
