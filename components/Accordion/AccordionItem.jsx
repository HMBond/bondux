import debounce from 'lodash/debounce';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import AccordionItemLabel from './AccordionItemLabel';
import CollapseIcon from './CollapseIcon';

const contentHeightSafetyMargin = 40;
const maxTransitionTime = 500; // 0.5s

const AccordionItemBase = styled.div`
  margin: 1rem;
`;

const AccordionItemTitle = styled.div`
  color: ${(props) => props.theme.colors.bg};
  font-family: 'DejaVu Condensed';
`;

const AccordionItemChildrenContainer = styled.div`
  max-height: ${(props) =>
    props.open
      ? `${props.contentHeight + contentHeightSafetyMargin}px`
      : '0px'};
  margin: ${(props) => (props.open ? '' : '0')};
  padding: ${(props) => (props.open ? '' : '0')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: max-height /* dont go over maxTransitionTime */
      ${(props) => (!props.open ? '0.45s ease-out' : '0.4s ease-in 0.1s')},
    margin ${(props) => (!props.open ? ' 0.3s ease' : ' 0.3s ease 0.2s')},
    padding ${(props) => (!props.open ? ' 0.3s ease' : ' 0.3s ease 0.2s')},
    opacity ${(props) => (!props.open ? ' 0.1s linear' : ' 0.5s linear 0.2s')};
  overflow: hidden;
`;

export const AccordionItemDescription = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4rem;
  ul {
    margin: 0;
    padding-left: 1rem;

    li {
      margin-left: 1rem;
    }
  }
`;

export const AccordionItem = ({
  id,
  open,
  item,
  onClick,
  children,
  ...props
}) => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);
  const onClickHandler = (item) => {
    setContentHeight(contentRef.current.clientHeight);
    onClick(item);
  };
  const updateContentHeight = () => {
    setContentHeight(contentRef.current.clientHeight);
  };

  return (
    <AccordionItemBase open={open} {...props}>
      <AccordionItemLabel
        open={open}
        onClick={() => children && onClickHandler(item)}
        hasChildren={children}
      >
        {children && <CollapseIcon open={open} />}
        <AccordionItemTitle>{item.name}</AccordionItemTitle>
      </AccordionItemLabel>
      <AccordionItemChildrenContainer contentHeight={contentHeight} open={open}>
        <div
          ref={contentRef}
          onClick={debounce(updateContentHeight, maxTransitionTime, {
            leading: false,
            trailing: true,
          })}
        >
          {children}
        </div>
      </AccordionItemChildrenContainer>
    </AccordionItemBase>
  );
};

export default AccordionItem;
