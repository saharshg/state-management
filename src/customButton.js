import { Button } from '@material-ui/core';
const CustomButton = (props) => (
  <Button variant='contained' {...props}>
    {props.children}
  </Button>
);
export default CustomButton;
