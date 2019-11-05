import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Context from "../components/Context";
import WhiteSpace from "../components/styles/WhiteSpace";
import Anchor from "../components/styles/Anchor";
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
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`;

const Skill = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  width: ${props => props.progress};
  background: ${props => props.theme.colors.accent};
  line-height: 2rem;
  cursor: pointer;
  max-height: 2rem;
  ${props =>
    props.open &&
    css`
      width: 100%;
      background: radial-gradient(
        at top left,
        ${props => props.theme.colors.accent} 20%,
        transparent 80%
      );
      line-height: 3rem;
      cursor: default;
      animation: ${heightAnimation} 0.4s 0s linear normal;
      max-height: 40rem;
    `}
`;

const SkillTitle = styled.div`
  color: ${props => props.theme.colors.bg};
  margin-bottom: 1rem;
  font-family: "DejaVu Condensed Bold";
`;

const SubSkill = styled.div`
  width: ${props => props.progress};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.bg};
  margin-bottom: 1rem;
  padding-left: 1rem;
  line-height: 2rem;
  font-family: "DejaVu Condensed Bold";
`;

const SkillDescription = styled.div`
  background-color: ${props => props.theme.colors.bg};
  padding: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
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
          <SkillDiagram onClick={e => e.preventDefault()}>
            {arrange(context.content[2].skillList).map((skill, index) => (
              <Anchor id={makeHash(skill.name)} key={uniqid()}>
                <Skill
                  progress={skill.progress}
                  open={openSkill === index}
                  onClick={e => openSkillWithoutBubbles({ e, index })}
                >
                  <SkillTitle>{skill.name}</SkillTitle>
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
                </Skill>
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
