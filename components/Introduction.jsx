import styled from 'styled-components';
import Image from '../node_modules/next/image';
import { Title } from './styled/Headings';
import Logo from './styled/Logo';
import WhiteSpace from './styled/WhiteSpace';

const IntroductionBase = styled.div`
  display: grid;
  min-height: 105vh;
  padding: 0 2rem;

  & p {
    max-width: 800px;
  }
`;

const ProfileImageContainer = styled.div`
  align-self: end;
  width: 100vw;
  margin: 2rem -2rem;
  background: black;
  padding: 0;
  border: 0;
  outline: 0;
`;

export default function Introduction({ context }) {
  return (
    <IntroductionBase>
      <Logo />
      <WhiteSpace height={'2rem'} />
      {context.content.introduction.paragraphs.map((paragraph, index) => {
        if (index === 0) {
          return <Title key={index}>{paragraph}</Title>;
        } else {
          return (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          );
        }
      })}
      <ProfileImageContainer>
        <Image
          alt="photo of Mike Bond"
          src="/profile.jpg"
          width={338}
          height={257}
          priority={true}
        />
      </ProfileImageContainer>
    </IntroductionBase>
  );
}
