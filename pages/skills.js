import { useState, Fragment } from "react";
import styled from "styled-components";
import Context from "../components/Context";

import WhiteSpace from "../components/styles/WhiteSpace";
import SkillDiagram from "../components/SkillDiagram";
import { Title, SubHeading } from "../components/styles/Headings";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const SkillsHeading = styled(SubHeading)`
  font-family: "DejaVu Extra Light";
  margin-top: 3rem;
`;

const SkillsTitle = styled(Title)``;

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);
  const [openSubSkill, setOpenSubSkill] = useState(null);

  const collapseAll = e => {
    setOpenSubSkill(null);
    setOpenSkill(null);
  };

  const skillLabelClickHandler = ({ e, index, subSkill = false }) => {
    if (subSkill) {
      index === openSubSkill ? setOpenSubSkill(null) : setOpenSubSkill(index);
    } else {
      index === openSkill ? setOpenSkill(null) : setOpenSkill(index);
    }
  };

  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <FullScreenContainer onClick={e => collapseAll(e)}>
            <SkillsHeading>{"These are my "}</SkillsHeading>
            <SkillsTitle>{"Skills"}</SkillsTitle>
            <SkillDiagram
              onClick={e => {
                e.stopPropagation();
              }}
              skillList={
                context.content.find(page => page.url == "/skills").skillList
              }
              skillLabelClickHandler={skillLabelClickHandler}
              openSkill={openSkill}
              openSubSkill={openSubSkill}
            />
            <WhiteSpace />
          </FullScreenContainer>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

export default Skills;
