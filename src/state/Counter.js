import { useState } from 'react';
import Button from '../customButton';
import { buttonContainerStyle, counterStyle } from '../style';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div style={buttonContainerStyle}>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
      <h1 style={counterStyle}>{count}</h1>
    </>
  );
};

export default Counter;
