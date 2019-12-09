import { Fragment } from "react";
import styled from "styled-components";

import WhiteSpace from "../components/styles/WhiteSpace";
import SkillAccordion from "../components/SkillAccordion";
import {
  Title,
  SubTitle as SkillsSubTitle
} from "../components/styles/Headings";

const SkillsTitle = styled(Title)`
  margin-top: 4rem;
`;

const Skills = ({ context }) => (
  <Fragment>
    <SkillsTitle>{"Skill Set"}</SkillsTitle>
    <SkillsSubTitle>{"WHAT I CAN DO"}</SkillsSubTitle>
    <SkillAccordion
      skillList={context.content.find(page => page.url == "/skills").skillList}
    />
    <WhiteSpace />
  </Fragment>
);

export default Skills;
