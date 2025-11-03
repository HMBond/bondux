import styled from 'styled-components';
import Image from '../node_modules/next/image';
import { Title } from './styled/Headings';
import Logo from './styled/Logo';

const IntroductionBase = styled.div`
  display: grid;
  min-height: 105vh;
  padding: 0 2rem;
  margin: 0 auto;

  & p {
    max-width: ${(props) => props.theme.maxWidth};
  }
`;

const ProfileImageContainer = styled.div`
  align-self: end;
  width: 100vw;
  margin: 2rem -2rem;
  background: black;

  @media (min-width: 768px) {
    & img {
      margin-left: 5vw;
    }
  }
`;

const IntroContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  place-self: center;
`;

export default function Introduction({ context }) {
  return (
    <IntroductionBase>
      <Logo />
      <IntroContainer>
        {context.content.introduction.paragraphs.map((paragraph, index) => {
          if (index === 0) {
            return <Title key={index}>{paragraph}</Title>;
          } else {
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            );
          }
        })}
      </IntroContainer>
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
