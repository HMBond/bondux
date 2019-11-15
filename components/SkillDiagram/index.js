import styled from "styled-components";
import { arrange } from "../helpers/functions";
import uniqid from "uniqid";

import Skill, { Skill as SubSkill } from "./Skill";

const SkillDiagramBase = styled.div`
  margin: 2rem 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`;

const SkillDescription = styled.div`
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

const SkillDiagram = ({
  skillList,
  onSkillClick,
  onSubSkillClick,
  openSkill,
  openSubSkill,
  className,
  ...props
}) => (
    <SkillDiagramBase {...props}>
      {arrange(skillList).map((skill, index) => (
        <Skill
          key={"" + index}
          open={openSkill === skill}
          skill={skill}
          onClick={() => onSkillClick(skill)}
        >
          {skill.description && (
            <SkillDescription
              dangerouslySetInnerHTML={{ __html: skill.description }}
            ></SkillDescription>
          )}
          {skill.subSkills &&
            arrange(skill.subSkills).map((subSkill, index) => (
              <SubSkill
                key={"" + index}
                open={openSubSkill === subSkill}
                skill={subSkill}
                onClick={() => onSubSkillClick(subSkill)}
              >
                {subSkill.description && (
                  <SkillDescription
                    dangerouslySetInnerHTML={{ __html: subSkill.description }}
                  ></SkillDescription>
                )}
              </SubSkill>
            ))}
        </Skill>
      ))}
    </SkillDiagramBase>
  );

export default SkillDiagram;
