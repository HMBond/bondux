import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  margin:0;
  order: ${(props) => props.order};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  pointer-events: ${(props) => props.disabled ? 'none' : 'all'}
`

export default Button;