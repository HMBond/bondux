import { useState, Fragment } from "react";
import styled from "styled-components";
import Context from "../components/Context";

import WhiteSpace from "../components/styles/WhiteSpace";
import SkillDiagram from "../components/SkillDiagram";

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const StyledSkillDiagram = styled(SkillDiagram)`
  margin: auto 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`;

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
            <StyledSkillDiagram
              onClick={e => {
                e.stopPropagation();
              }}
              skillList={context.content[2].skillList}
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
