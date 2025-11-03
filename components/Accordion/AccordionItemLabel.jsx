import styled, { css } from 'styled-components';

const AccordionItemBar = styled.div`
  padding: 0 1rem;
  line-height: 2rem;
  display: flex;
  cursor: ${(props) => (props.hasChildren ? 'pointer' : 'default')};
  background-color: ${(props) =>
    props.hasChildren && !props.open
      ? props.theme.colors.accent
      : props.theme.colors.grey};
  transition: background-color 0.3s linear;

  ${(props) =>
    css`
      position: relative;
      :after {
        content: '';
        height: 0;
        position: absolute;
        right: 0;
        top: 0;
        border-top: 1rem solid
          ${(props) =>
            props.bgColor
              ? props.theme.colors[props.bgColor]
              : props.theme.colors.bg};
        border-bottom: 1rem solid
          ${(props) =>
            props.bgColor
              ? props.theme.colors[props.bgColor]
              : props.theme.colors.bg};
        border-left: 1rem solid transparent;
      }
    `}
`;

export default AccordionItemBar;
