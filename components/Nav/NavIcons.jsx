import styled from 'styled-components';
import ArrowSvg from '../../public/arrow.svg';

const NavIconBase = styled(ArrowSvg)`
  display: block;
  width: 30px;
  height: 30px;
  fill: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
  margin: 25px;
`;

export const NavBackIcon = styled(NavIconBase)`
  transform: rotate(180deg);
`;

export const NavForwardIcon = styled(NavIconBase)`
  transform: rotate(0deg);
`;

export const NavToggleIcon = styled(NavIconBase)`
  fill: ${(props) => props.theme.colors.bg};
  transform: ${(props) => (props.open ? 'rotate(-630deg)' : 'rotate(-90deg)')};
  margin: auto;
`;

const NavIcons = { NavBackIcon, NavToggleIcon, NavForwardIcon };
export default NavIcons;
