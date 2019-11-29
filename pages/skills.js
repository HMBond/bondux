import { useState, Fragment } from "react";
import styled from "styled-components";
import Context from "../components/Context";

import WhiteSpace from "../components/styles/WhiteSpace";
import SkillDiagram from "../components/SkillDiagram";
import {
  Title,
  SubTitle as SkillsSubTitle
} from "../components/styles/Headings";

const SkillsTitle = styled(Title)`
  margin-top: 4rem;
`;

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);
  const [openSubSkill, setOpenSubSkill] = useState(null);

  const collapseAll = e => {
    setOpenSubSkill(null);
    setOpenSkill(null);
  };

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
    <Context.Consumer>
      {context => (
        <Fragment>
          <SkillsTitle>{"Skill Set"}</SkillsTitle>
          <SkillsSubTitle>{"WHAT I CAN DO"}</SkillsSubTitle>
          <SkillDiagram
            skillList={
              context.content.find(page => page.url == "/skills").skillList
            }
            onSkillClick={onSkillClick}
            onSubSkillClick={onSubSkillClick}
            openSkill={openSkill}
            openSubSkill={openSubSkill}
          />
          <WhiteSpace />
        </Fragment>
      )}
    </Context.Consumer>
  );
};

export default Skills;
