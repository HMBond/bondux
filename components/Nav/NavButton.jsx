import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Context from "../Context";
import Button from "../styled/Button";

const NavButtonBase = styled(Button)`
  position: relative;
  display: flex;
  transition: opacity 0.5s ease-in-out;
  margin: 15px 0;
`;

const NavIconContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const devanimation = keyframes`
  0%, 50% {
    background-position-y: 0px;
  }
  100% {
    background-position-y: 50px;
  }
`;

const NavBall = styled.div`
  z-index: -1; /* fix for FireFox */
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
      return "transition: transform 0.5s ease-in, background-color 0.2s linear";
    } else if (props.hover) {
      return "transition: transform 0.2s ease-out, background-color 0.2s linear 0.5s";
    } else {
      return "transition: transform 0.5s ease-out, background-color 0.2s linear 0.5s";
    }
  }};

  background-color: ${props =>
    props.open ? props.theme.colors.accent : props.theme.colors.primary};
  background-position: center;
  background-repeat: no-repeat;

  ${props =>
    props.devMode &&
    props.open &&
    css`
      background-image: linear-gradient(lime, white 5%, lime 10%);
      background-position: 0 0;
      animation: ${devanimation} 5s 0s linear infinite;
    `}
`;

export const NavButton = ({
  children,
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
          <NavBall open={open} hover={hover} devMode={context.devMode} />
          <NavIconContainer>{children}</NavIconContainer>
        </NavButtonBase>
      )}
    </Context.Consumer>
  );
};
