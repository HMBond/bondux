import { useState } from "react";
import styled from "styled-components";

const NavButtonBase = styled.div`
  display: flex;
  order: ${props => props.order};
  opacity: ${props => (props.hidden ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;
`;

const NavIconContainer = styled.div`
  position: relative;
  left: -40px;
  top: 10px;
  width: 0;
`;

const NavBall = styled.div`
  display: block;
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  transform: ${props => {
    if (props.open) {
      return "scale(100)";
    } else if (props.hover) {
      return "scale(1.2)";
    } else {
      return "none";
    }
  }};

  background-color: ${props =>
    props.open ? props.theme.acColor : props.theme.fgColor};
  ${props => {
    if (props.open) {
      return "transition: transform 0.5s ease-in, background-color 0.2s linear";
    } else if (props.hover) {
      return "transition: transform 0.2s ease-out, background-color 0.2s linear 0.5s";
    } else {
      return "transition: transform 0.5s ease-out, background-color 0.2s linear 0.5s";
    }
  }};
`;

export const NavButton = ({
  children,
  hidden,
  open,
  properlyClosed,
  onClick,
  order
}) => {
  const [hover, setHover] = useState(false);
  return (
    <NavButtonBase
      hidden={hidden}
      open={open}
      order={order}
      onMouseEnter={() => {
        if (properlyClosed) {
          setHover(true);
        }
      }}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick()}
    >
      <NavBall open={open} hover={hover} />
      <NavIconContainer>{children}</NavIconContainer>
    </NavButtonBase>
  );
};
