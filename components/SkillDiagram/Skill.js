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
  margin-bottom: 1rem;
  font-family: "DejaVu Condensed Bold";
`;

const SkillInnerContainer = styled.div`
  max-height: ${props => (props.open ? "80rem" : "0")};
  overflow-y: ${props => (props.open ? "auto" : "hidden")};
  transition: max-height 0.5s
    ${props => (props.open ? "ease-in" : "cubic-bezier(0.22, 0.61, 0.36, 1)")};
  scrollbar-width: none;
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
}) => (
  <SkillBase open={open} isSubSkill {...props}>
    <SkillLabel
      id={makeSlug(skill.name)}
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

export default Skill;
