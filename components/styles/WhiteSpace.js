import styled from "styled-components";

const WhiteSpace = styled.div`
  padding-bottom: ${props => (props.height ? props.height : "10rem")};
`;

export default ({ height, ...props }) => (
  <WhiteSpace height={height} {...props} />
);
