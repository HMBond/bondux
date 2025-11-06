import styled from 'styled-components';
import SkillAccordion from '../components/SkillAccordion';
import { SubTitle, Title } from '../components/styled/Headings';

const SkillsPage = styled.section`
  display: grid;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
`;

const Skills = ({ context }) => (
  <SkillsPage>
    <Title>{'Skills'}</Title>
    <SubTitle>{'WHAT DO I OFFER'}</SubTitle>
    <SkillAccordion skillList={context.content.skills.skillList} />
  </SkillsPage>
);

export default Skills;
