import styled from "styled-components";

const Hr = styled.hr`
  width: 80%;
  height: calc(1rem / 2.14);
  border: none;
  border-image: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.grey},
      transparent
    )
    1;
  border-style: solid;
  border-width: 1px;
`;

export default Hr;
