import { useState, useRef } from "react";
import debounce from "lodash/debounce";
import styled from "styled-components";

import ProgressBar from "../styles/ProgressBar";
import CollapseIcon from "./CollapseIcon";

const contentHeightSafetyMargin = 40;
const maxTransitionTime = 500; // 0.5s

const SkillBase = styled.div`
  margin: 1rem;
  border-bottom: ${props =>
    props.open ? `dashed ${props.theme.colors.primary} 1px` : "none"};
`;

const SkillLabel = styled(ProgressBar)`
  display: flex;
  height: 2rem;
  cursor: ${props => (props.hasChildren ? "pointer" : "default")};
  background-color: ${props =>
    props.hasChildren && !props.open
      ? props.theme.colors.accent
      : props.theme.colors.grey};
  transition: background-color 0.3s linear;
`;

const SkillTitle = styled.div`
  color: ${props => props.theme.colors.bg};
  font-family: "DejaVu Condensed Bold";
`;

const SkillChildrenContainer = styled.div`
  max-height: ${props =>
    props.open
      ? `${props.contentHeight + contentHeightSafetyMargin}px`
      : "0px"};
  margin: ${props => (props.open ? "" : "0")};
  padding: ${props => (props.open ? "" : "0")};
  opacity: ${props => (props.open ? "1" : "0")};
  transition: max-height /* dont go over maxTransitionTime */
      ${props => (!props.open ? "0.45s ease-out" : "0.4s ease-in 0.1s")},
    margin ${props => (!props.open ? " 0.3s ease" : " 0.3s ease 0.2s")},
    padding ${props => (!props.open ? " 0.3s ease" : " 0.3s ease 0.2s")},
    opacity ${props => (!props.open ? " 0.1s linear" : " 0.5s linear 0.2s")};
  overflow: hidden;
`;

export const Skill = ({
  id,
  open,
  skill,
  onClick,
  children,
  isSubSkill,
  ...props
}) => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);
  const onClickHandler = skill => {
    setContentHeight(contentRef.current.clientHeight);
    onClick(skill);
  };
  const updateContentHeight = () => {
    setContentHeight(contentRef.current.clientHeight);
  };

  return (
    <SkillBase open={open} isSubSkill {...props}>
      <SkillLabel
        progress={skill.progress}
        open={open}
        onClick={() => children && onClickHandler(skill)}
        hasChildren={children}
      >
        {children && <CollapseIcon open={open} />}
        <SkillTitle>{skill.name}</SkillTitle>
      </SkillLabel>
      <SkillChildrenContainer contentHeight={contentHeight} open={open}>
        <div
          ref={contentRef}
          onClick={debounce(() => updateContentHeight(), maxTransitionTime, {
            leading: false,
            trailing: true
          })}
        >
          {children}
        </div>
      </SkillChildrenContainer>
    </SkillBase>
  );
};

export default Skill;
