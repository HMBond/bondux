import styled from 'styled-components';
import ArrowSvg from '../../public/arrow.svg';

const NavIconBase = styled(ArrowSvg)`
  opacity: ${(props) => (props.hidden ? '0' : '1')};
  order: ${(props) => props.order};
  width: 30px;
  height: 30px;
  fill: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
`;

export const NavBackIcon = styled(NavIconBase)`
  transform: rotate(180deg);
  margin: 25px;
`;

export const NavForwardIcon = styled(NavIconBase)`
  transform: rotate(0deg);
  margin: 25px;
`;

export const NavToggleIcon = styled(NavIconBase)`
  fill: ${(props) => props.theme.colors.bg};
  transform: ${(props) => (props.open ? 'rotate(-630deg)' : 'rotate(-90deg)')};
`;

const NavIcons = { NavBackIcon, NavToggleIcon, NavForwardIcon };
export default NavIcons;
