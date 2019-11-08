import { Fragment } from "react";
import styled, { css } from "styled-components";

import SkillProgressBar from "./styles/SkillProgressBar";
import ArrowSvg from "../static/arrow.svg";

import { arrange, makeHash } from "./helpers/functions";
import uniqid from "uniqid";

const SkillDiagramBase = styled.div``;

const Skill = styled.div``;

const SkillLabel = styled(SkillProgressBar)`
  display: flex;
  height: 2rem;
  background: ${props => props.theme.colors.accent};
  cursor: pointer;
  ${props =>
    props.open &&
    css`
      background: ${props => props.theme.colors.grey};
    `}
`;

const SkillTitle = styled.div`
  color: ${props => props.theme.colors.bg};
  margin-bottom: 1rem;
  font-family: "DejaVu Condensed Bold";
`;

const SkillDescription = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

const SubSkill = styled(SkillProgressBar)`
  display: flex;
  height: 2rem;
  background: ${props => props.theme.colors.accent};
  cursor: pointer;
  ${props =>
    props.open &&
    css`
      background: ${props => props.theme.colors.grey};
    `}
  margin-left: 1rem;
  background: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.bg};
  font-family: "DejaVu Condensed Bold";
`;

const CollapseIcon = styled(ArrowSvg)`
  fill: ${props => props.theme.colors.bg};
  width: 1rem;
  height: 1rem;
  margin: auto 0.5rem auto 0;
  transform: ${props => (props.open ? "rotate(720deg)" : "rotate(90deg)")};
  transition: all 0.6s ease-in-out;
`;

const SkillDiagram = ({
  skillList,
  skillLabelClickHandler,
  openSkill,
  openSubSkill,
  className,
  ...props
}) => (
  <SkillDiagramBase className={className} {...props}>
    {arrange(skillList).map((skill, index) => (
      <Skill key={uniqid()}>
        <SkillLabel
          id={makeHash(skill.name)}
          progress={skill.progress}
          open={openSkill === index}
          onClick={e => skillLabelClickHandler({ e, index })}
        >
          <CollapseIcon open={openSkill === index} />
          <SkillTitle>{skill.name}</SkillTitle>
        </SkillLabel>
        {skill.description && openSkill === index && (
          <SkillDescription
            dangerouslySetInnerHTML={{ __html: skill.description }}
          ></SkillDescription>
        )}
        {skill.subSkills &&
          openSkill === index &&
          arrange(skill.subSkills).map((subSkill, index) => (
            <Fragment key={uniqid()}>
              <SubSkill
                progress={subSkill.progress}
                onClick={e =>
                  skillLabelClickHandler({ e, index, subSkill: true })
                }
              >
                {subSkill.description && (
                  <CollapseIcon open={openSubSkill === index} />
                )}
                {subSkill.name}
              </SubSkill>

              {subSkill.description && openSubSkill === index && (
                <SkillDescription
                  dangerouslySetInnerHTML={{
                    __html: subSkill.description
                  }}
                />
              )}
            </Fragment>
          ))}
      </Skill>
    ))}
  </SkillDiagramBase>
);

export default SkillDiagram;
