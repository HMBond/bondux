import React from 'react';
import styled from 'styled-components';
import { Title } from './styled/Headings';

const IntroductionBase = styled.div`
  max-width: 800px;
  padding: 1rem;
`;

export default function Introduction({ context }) {
  return (
    <IntroductionBase>
      {context.content.introduction.paragraphs.map((paragraph, index) => {
        if (index === 0) {
          return <Title key={index}>{paragraph}</Title>;
        } else {
          return <p key={index}>{paragraph}</p>;
        }
      })}
    </IntroductionBase>
  );
}
