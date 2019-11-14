import styled from "styled-components";
import { makeSlug } from "../helpers/functions";

import ProgressBar from "../styles/ProgressBar";
import CollapseIcon from "../styles/CollapseIcon";

const SkillBase = styled.div`
  margin-left: ${props => (props.subSkill ? "1rem" : "")};
`;

const SkillLabel = styled(ProgressBar)`
  display: flex;
  height: 2rem;
  cursor: ${props => (props.hasChildren ? "pointer" : "default")};
  background: ${props =>
    props.hasChildren && !props.open
      ? props.theme.colors.accent
      : props.theme.colors.grey};
`;

const SkillTitle = styled.div`
  color: ${props => props.theme.colors.bg};
  margin-bottom: 1rem;
  font-family: "DejaVu Condensed Bold";
`;

export const Skill = ({
  open,
  skill,
  onClick,
  children,
  subSkill,
  ...props
}) => (
  <SkillBase subSkill {...props}>
    <SkillLabel
      id={makeSlug(skill.name)}
      progress={skill.progress}
      open={open}
      onClick={() => onClick(skill)}
      hasChildren={children}
    >
      {children && <CollapseIcon open={open} />}
      <SkillTitle>{skill.name}</SkillTitle>
    </SkillLabel>
    {open && children}
  </SkillBase>
);

export default Skill;
