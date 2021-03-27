import Button from '../customButton';
import { buttonContainerStyle, counterStyle } from '../style';

const State = () => {
  return (
    <>
      <div style={buttonContainerStyle}>
        <Button>Increment</Button>
        <Button>Decrement</Button>
        <Button>Reset</Button>
      </div>
      <h1 style={counterStyle}>0</h1>
    </>
  );
};

export default State;
