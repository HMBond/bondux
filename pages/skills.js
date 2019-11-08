import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Context from "../components/Context";
import WhiteSpace from "../components/styles/WhiteSpace";
import Anchor from "../components/styles/Anchor";
import SkillProgressBar from "../components/styles/SkillProgressBar";
import { arrange, makeHash } from "../components/helpers/functions";
import uniqid from "uniqid";

const SkillPageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const SkillDiagram = styled.div`
  margin: auto 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`;

const Skill = styled(SkillProgressBar)`
  background: ${props => props.theme.colors.accent};
  cursor: pointer;
  ${props =>
    props.open &&
    css`
      background: ${props => props.theme.colors.grey};
      cursor: default;
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
  margin-left: 1rem;
  background: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.bg};
  font-family: "DejaVu Condensed Bold";
`;

const heightAnimation = keyframes`
  0% {
    max-height: 2rem;
  }
  80%, 100% {
    max-height: 40rem;
  }
`;

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const openSkillWithoutBubbles = ({ e, index }) => {
    e.stopPropagation();
    setOpenSkill(index);
  };

  return (
    <Context.Consumer>
      {context => (
        <SkillPageBackground onClick={() => setOpenSkill(null)}>
          <SkillDiagram onClick={e => e.stopPropagation()}>
            {arrange(context.content[2].skillList).map((skill, index) => (
              <Anchor id={makeHash(skill.name)} key={uniqid()}>
                <Skill
                  progress={skill.progress}
                  open={openSkill === index}
                  onClick={e => openSkillWithoutBubbles({ e, index })}
                >
                  <SkillTitle>{skill.name}</SkillTitle>
                </Skill>
                {skill.description && openSkill === index && (
                  <SkillDescription
                    dangerouslySetInnerHTML={{ __html: skill.description }}
                  ></SkillDescription>
                )}
                {skill.subSkills &&
                  openSkill === index &&
                  arrange(skill.subSkills).map(subSkill => (
                    <SubSkill progress={subSkill.progress} key={uniqid()}>
                      {subSkill.name}
                    </SubSkill>
                  ))}
              </Anchor>
            ))}
            <WhiteSpace />
          </SkillDiagram>
        </SkillPageBackground>
      )}
    </Context.Consumer>
  );
};

export default Skills;
