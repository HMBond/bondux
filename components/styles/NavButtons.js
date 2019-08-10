import styled, { css } from "styled-components";

import NavToggleSvg from "../../static/nav-toggle.svg";
import NavForwardSvg from "../../static/nav-forward.svg";

const iconSize = "30px";

const NavButtonBase = styled.div`
  display: ${props => (props.hidden ? "none" : "flex")};

  ${props =>
    !props.open &&
    css`
      max-width: 50px;
      :hover {
        > [class*="NavBall"] {
          transform: scale(1.2);
        }
      }
    `}
`;

const NavIconContainer = styled.div`
  position: relative;
  left: -40px;
  top: 10px;
  width: 0;
`;

const NavBackIcon = styled(NavForwardSvg)`
  width: ${iconSize};
  height: ${iconSize};
  fill: white;
  cursor: pointer;
  transform: ${props =>
    props.open ? "rotate(-540deg + 180deg)" : "rotate(180deg)"};
  transition: transform 0.3s ease-in-out;
`;

const NavToggleIcon = styled(NavToggleSvg)`
  width: ${iconSize};
  height: ${iconSize};
  fill: white;
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const NavForwardIcon = styled(NavForwardSvg)`
  width: ${iconSize};
  height: ${iconSize};
  fill: white;
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const NavBall = styled.div`
  display: block;
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: ${props => (props.open ? "scale(100)" : "none")};
  background-color: ${props => (props.open ? "orange" : "#4a4a4a")};
  ${props =>
    props.open
      ? "transition: all 0.5s ease-in-out, background-color 0.2s linear"
      : "transition: all 0.5s ease-in-out, background-color 0.2s linear 0.5s"};
`;

export const NavBackButton = ({ onClick, hidden }) => {
  return (
    <NavButtonBase hidden={hidden}>
      <NavBall onClick={() => onClick()} />
      <NavIconContainer>
        <NavBackIcon onClick={() => onClick()} />
      </NavIconContainer>
    </NavButtonBase>
  );
};

export const NavToggleButton = ({ open, onClick }) => {
  return (
    <NavButtonBase open={open}>
      <NavBall open={open} onClick={() => onClick()} />
      <NavIconContainer>
        <NavToggleIcon open={open} onClick={() => onClick()} />
      </NavIconContainer>
    </NavButtonBase>
  );
};

export const NavForwardButton = ({ onClick, hidden }) => {
  return (
    <NavButtonBase hidden={hidden}>
      <NavBall onClick={() => onClick()} />
      <NavIconContainer>
        <NavForwardIcon onClick={() => onClick()} />
      </NavIconContainer>
    </NavButtonBase>
  );
};
