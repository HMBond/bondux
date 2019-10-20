import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Context from "../Context";

const NavButtonBase = styled.div`
  display: flex;
  order: ${props => props.order};
  opacity: ${props => (props.hidden ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;
  margin: 10px;
`;

const NavIconContainer = styled.div`
  position: relative;
  left: -40px;
  top: 10px;
  width: 0;
`;

const devanimation = keyframes`
  0%, 90% {
    background-position: 0;
  }
  100% {
    background-position: 50px;
  }
`;

const NavBall = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  transform: ${props => {
    if (props.open) {
      return "scale(100)";
    } else if (props.hover) {
      return "scale(1.1)";
    } else {
      return "none";
    }
  }};

  ${props => {
    if (props.open) {
      return "transition: transform 0.5s ease-in, background 0.2s linear";
    } else if (props.hover) {
      return "transition: transform 0.2s ease-out, background 0.2s linear 0.5s";
    } else {
      return "transition: transform 0.5s ease-out, background 0.2s linear 0.5s";
    }
  }};

  ${props =>
    (props.devMode &&
      css`
        background: linear-gradient(to right, white, lime 25%, lime 75%, white);
        animation: ${devanimation} 10s 0s ease infinite;
      `) ||
    css`
      background: ${props =>
        props.open ? props.theme.colors.accent : props.theme.colors.primary};
    `}
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
    <Context.Consumer>
      {context => (
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
          <NavBall open={open} hover={hover} devMode={context.themeInvert} />
          <NavIconContainer>{children}</NavIconContainer>
        </NavButtonBase>
      )}
    </Context.Consumer>
  );
};
