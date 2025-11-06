import styled from 'styled-components';
import Image from '../node_modules/next/image';
import { Title } from './styled/Headings';

const IntroductionBase = styled.section`
  display: grid;
  margin: 0 auto;
  justify-items: center;
`;

const ProfileImageContainer = styled.div`
  align-self: end;
  width: 100vw;
  margin: 2rem -2rem;
  background: black;

  @media (min-width: 768px) {
    & img {
      margin-left: 10vw;
    }
  }
`;

const IntroContainer = styled.div`
  width: min(100%, ${(props) => props.theme.maxWidth});
`;

export default function Introduction({ context }) {
  return (
    <IntroductionBase>
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
