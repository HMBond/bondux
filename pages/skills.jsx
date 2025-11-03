import styled from 'styled-components';
import SkillAccordion from '../components/SkillAccordion';
import { PageTitle, SubTitle } from '../components/styled/Headings';

const SkillsPage = styled.section`
  display: grid;
  padding: 0 2rem;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
`;

const Skills = ({ context }) => (
  <SkillsPage>
    <PageTitle>{'Skills'}</PageTitle>
    <SubTitle>{'WHAT I CAN DO'}</SubTitle>
    <SkillAccordion skillList={context.content.skills.skillList} />
  </SkillsPage>
);

export default Skills;
