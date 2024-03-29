import styled from 'styled-components';
import ArrowSvg from '../../public/arrow.svg';

const CollapseIconBase = styled(ArrowSvg)`
  fill: ${(props) => props.theme.colors.bg};
  width: 1rem;
  height: 1rem;
  margin: auto 0.5rem auto 0;
  transform: ${(props) => (props.open ? 'rotate(360deg)' : 'rotate(90deg)')};
  transition: transform 0.3s ease-in-out;
`;

const CollapseIcon = ({ open, ...props }) => (
  <CollapseIconBase open={open} {...props} />
);

export default CollapseIcon;
