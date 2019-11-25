import { useEffect } from "react";
import styled from "styled-components";
import { makeSlug } from "../helpers/functions";

import ProgressBar from "../styles/ProgressBar";
import CollapseIcon from "./CollapseIcon";

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

const SkillInnerContainer = styled.div`
  & > div,
  > ul {
    max-height: ${props => (props.open ? "25rem" : "0")};
    margin: ${props => (props.open ? "" : "0")};
    padding: ${props => (props.open ? "" : "0")};
    opacity: ${props => (props.open ? "1" : "0")};
    transition: max-height 0.5s
        ${props => (!props.open ? "ease-out" : "ease-in")},
      margin ${props => (!props.open ? " 0.3s ease 0.2s" : " 0.3s ease")},
      padding ${props => (!props.open ? " 0.3s ease 0.2s" : " 0.3s ease")},
      opacity 0.3s linear;
  }
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
  const scrollBackUp = () => {
    const thisEl = document.querySelector(`#${makeSlug(skill.name)}`);
    const thisBaseEl = thisEl.parentElement;
    const upperEl = thisBaseEl.previousSibling;

    upperEl &&
      upperEl.scrollIntoView({
        behavior: "smooth"
      });
  };

  useEffect(() => {
    open && !isSubSkill && scrollBackUp;
  }, [open]);

  return (
    <SkillBase open={open} isSubSkill {...props}>
      <SkillLabel
        id={makeSlug(skill.name)} //scroll to Label, not to Base
        progress={skill.progress}
        open={open}
        onClick={() => children && onClick(skill)}
        hasChildren={children}
      >
        {children && <CollapseIcon open={open} />}
        <SkillTitle>{skill.name}</SkillTitle>
      </SkillLabel>
      <SkillInnerContainer open={open}>{children}</SkillInnerContainer>
    </SkillBase>
  );
};

export default Skill;
