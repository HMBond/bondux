import styled from 'styled-components';
import { PageTitle, SubTitle, Label } from '../components/styles/Headings';
import WhiteSpace from '../components/styles/WhiteSpace';

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

const ContactLinks = styled.div`
  margin: 2rem;
`;

const ContactItem = styled.div`
  a {
    display: flex;
    align-items: center;
    line-height: 4rem;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
  }
  &:hover span {
    color: ${(props) => props.theme.colors.accent};
  }
  &:hover img {
    /* temp trick to color svg https://codepen.io/sosuke/pen/Pjoqqp */
    filter: invert(54%) sepia(93%) saturate(751%) hue-rotate(359deg)
      brightness(100%) contrast(104%);
  }
`;

const Icon = styled.img`
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 2.8rem;
  height: 2.8rem;
  margin-left: auto;
`;

const Contact = ({ context }) => (
  <ContactPage>
    <PageTitle>{'Contact'}</PageTitle>
    <SubTitle>{"LET'S CHAT"}</SubTitle>
    <ContactLinks>
      <ContactItem>
        <a
          target={'_blank'}
          rel="noreferrer"
          href={
            'mailto:post@bondux.dev?subject=Contact&body=Hi Mike, %0D%0A%0D%0A%0D%0A%0D%0A'
          }
        >
          <Label>{'Email'}</Label>
          <Icon src={'/email.svg'} alt="Gmail" />
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target={'_blank'}
          rel="noreferrer"
          href={'https://www.linkedin.com/in/mike-bond-3258a32a/'}
        >
          <Label>{'LinkedIn'}</Label>
          <Icon src={'/linkedin.svg'} alt="LinkedIn" />
        </a>
      </ContactItem>
    </ContactLinks>
    <SubTitle>OTHER LINKS</SubTitle>
    <ContactLinks>
      <ContactItem>
        <a
          target={'_blank'}
          rel="noreferrer"
          href={'https://www.flickr.com/photos/7363277@N07'}
        >
          <Label>{'Photography'}</Label>
          <Icon src={'/camera.svg'} alt="Flickr.com" />
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target={'_blank'}
          rel="noreferrer"
          href={'https://soundcloud.com/mike-bond-sound/tracks'}
        >
          <Label>{'Soundcloud'}</Label>
          <Icon src={'/soundcloud.svg'} alt="Soundcloud" />
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target={'_blank'}
          rel="noreferrer"
          href={'https://soundcloud.com/towardstheartist/sets/set1'}
        >
          <Label>{'Towards the artist'}</Label>
          <Icon src={'/towards_the_artist.svg'} alt="Towards the artist" />
        </a>
      </ContactItem>
    </ContactLinks>
    <WhiteSpace />
  </ContactPage>
);

export default Contact;
