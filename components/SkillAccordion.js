import { useState } from "react";
import styled from "styled-components";
import { arrange } from "./helpers/functions";

import {
  AccordionItem as Skill,
  AccordionItem as SubSkill,
  AccordionItemDescription as SkillDescription
} from "./Accordion";

const SkillAccordionBase = styled.div`
  margin: 2rem 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`;

const SkillAccordion = ({ skillList, ...props }) => {
  const [openSkill, setOpenSkill] = useState(null);
  const [openSubSkill, setOpenSubSkill] = useState(null);

  const onSkillClick = skill => {
    skill === openSkill ? setOpenSkill(null) : setOpenSkill(skill);
    setOpenSubSkill(null);
  };

  const onSubSkillClick = subSkill => {
    subSkill === openSubSkill
      ? setOpenSubSkill(null)
      : setOpenSubSkill(subSkill);
  };

  return (
    <SkillAccordionBase {...props}>
      {arrange(skillList).map(skill => (
        <Skill
          key={skill.name}
          open={openSkill === skill}
          item={skill}
          onClick={() => onSkillClick(skill)}
        >
          {skill.description && (
            <SkillDescription
              open={openSkill === skill}
              dangerouslySetInnerHTML={{ __html: skill.description }}
            ></SkillDescription>
          )}
          {skill.subSkills &&
            arrange(skill.subSkills).map(subSkill => (
              <SubSkill
                key={subSkill.name}
                open={openSubSkill === subSkill}
                item={subSkill}
                onClick={() => onSubSkillClick(subSkill)}
              >
                {subSkill.description && (
                  <SkillDescription
                    open={openSubSkill === subSkill}
                    dangerouslySetInnerHTML={{ __html: subSkill.description }}
                  ></SkillDescription>
                )}
              </SubSkill>
            ))}
        </Skill>
      ))}
    </SkillAccordionBase>
  );
};

export default SkillAccordion;
