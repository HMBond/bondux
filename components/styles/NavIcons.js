import styled from "styled-components";
import ArrowSvg from "../../public/arrow.svg";

export const NavBackIcon = styled(ArrowSvg)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colors.bg};
  cursor: pointer;
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
`;

export const NavToggleIcon = styled(ArrowSvg)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colors.bg};
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-630deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
`;

export const NavForwardIcon = styled(ArrowSvg)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colors.bg};
  cursor: pointer;
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
`;

export default { NavBackIcon, NavToggleIcon, NavForwardIcon };
