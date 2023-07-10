import { Fragment } from 'react';
import styled from 'styled-components';

import WhiteSpace from '../components/styled/WhiteSpace';
import SkillAccordion from '../components/SkillAccordion';
import { PageTitle, SubTitle } from '../components/styled/Headings';

const Skills = ({ context }) => (
  <Fragment>
    <PageTitle>{'Skills'}</PageTitle>
    <SubTitle>{'WHAT I CAN DO'}</SubTitle>
    <SkillAccordion skillList={context.content.skills.skillList} />
    <WhiteSpace />
  </Fragment>
);

export default Skills;
