import styled from 'styled-components';

const WhiteSpaceStyled = styled.div`
  padding-bottom: ${(props) => (props.height ? props.height : '10rem')};
`;

const WhiteSpace = ({ height, ...props }) => (
  <WhiteSpaceStyled height={height} {...props} />
);

export default WhiteSpace;
