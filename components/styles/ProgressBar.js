import styled from "styled-components";

const SkillProgressBar = styled.div`
  padding: 0 1rem;
  margin: 1rem 0;
  line-height: 2rem;
  position: relative;

  :after {
    content: " ";
    width: calc(100% - ${props => props.progress});
    height: 1px;
    position: absolute;
    right: 0;
    top: 0;
    border-top: 1rem solid
      ${props =>
        props.bgColor
          ? props.theme.colors[props.bgColor]
          : props.theme.colors.bg};
    border-bottom: 1rem solid
      ${props =>
        props.bgColor
          ? props.theme.colors[props.bgColor]
          : props.theme.colors.bg};
    border-left: 1rem solid transparent;
  }
`;

export default SkillProgressBar;
