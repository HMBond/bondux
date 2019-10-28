import styled from "styled-components";

const Hr = styled.hr`
  width: 80%;
  height: calc(1rem / 2.14);
  border: none;
  border-image: radial-gradient(
      at top center,
      ${props => props.theme.colors.grey},
      transparent 90%
    )
    1;
  border-style: solid;
  border-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
`;

export default Hr;
