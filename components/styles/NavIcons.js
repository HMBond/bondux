import styled from "styled-components";

import NavToggleSvg from "../../static/nav-toggle.svg";
import NavForwardSvg from "../../static/nav-forward.svg";

const iconSize = "30px";

export const NavBackIcon = styled(NavForwardSvg)`
  width: ${iconSize};
  height: ${iconSize};
  fill: ${props => props.theme.bgColor};
  cursor: pointer;
  transform: ${props =>
    props.open ? "rotate(-540deg + 180deg)" : "rotate(180deg)"};
  transition: transform 0.3s ease-in-out;
`;

export const NavToggleIcon = styled(NavToggleSvg)`
  width: ${iconSize};
  height: ${iconSize};
  fill: ${props => props.theme.bgColor};
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

export const NavForwardIcon = styled(NavForwardSvg)`
  width: ${iconSize};
  height: ${iconSize};
  fill: ${props => props.theme.bgColor};
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

export default { NavBackIcon, NavToggleIcon, NavForwardIcon };
