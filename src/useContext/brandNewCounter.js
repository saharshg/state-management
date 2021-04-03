import * as React from 'react';
import Button from '../customButton';
import { buttonContainerStyle, counterStyle } from '../style';
import { CountProvider, useCount } from './context-with-reducer';

const Counter = () => {
  const { dispatch } = useCount();
  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const reset = () => dispatch({ type: 'reset' });

  return (
    <div style={buttonContainerStyle}>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
const CountDisplay = () => {
  const { state } = useCount();
  return <h1 style={counterStyle}>{state.count}</h1>;
};

const NewCounter = () => {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default NewCounter;
