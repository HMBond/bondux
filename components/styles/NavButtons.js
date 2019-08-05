import styled, { css } from "styled-components";

import NavSvg from "../../static/nav-toggle.svg";

const NavButtonBase = styled.div`
  ${props =>
    !props.open &&
    css`
      :hover {
        > div {
          transform: scale(1.2);
        }
      }
    `}
`;

const NavToggleIcon = styled(NavSvg)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 100%;
  height: 30px;
  fill: white;
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const NavToggleBall = styled.div`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: ${props => (props.open ? "scale(50)" : "none")};
  background-color: ${props => (props.open ? "orange" : "#4a4a4a")};
  ${props =>
    props.open
      ? "transition: all 0.5s ease-in-out, background-color 0.2s linear"
      : "transition: all 0.5s ease-in-out, background-color 0.2s linear 0.5s"};
`;

const NavButton = ({ type, open, onClick }) => {
  switch (type) {
    case "menu":
      return (
        <NavButtonBase open={open}>
          <NavToggleBall open={open} onClick={() => onClick()} />
          <NavToggleIcon open={open} onClick={() => onClick()} />
        </NavButtonBase>
      );
  }
};

export default NavButton;
