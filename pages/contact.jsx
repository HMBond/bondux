import styled from 'styled-components';
import { Label, PageTitle, SubTitle } from '../components/styled/Headings';

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 0 2rem;
  place-self: center;
  width: 100%;
`;

const ContactLinks = styled.div`
  margin: 0 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-flow: column nowrap;
  }
`;

const ContactItem = styled.div`
  a {
    display: flex;
    gap: 1rem;
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
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 1rem;
`;

const Contact = ({ context }) => (
  <ContactPage>
    <PageTitle>Contact</PageTitle>
    <SubTitle>{"LET'S CHAT"}</SubTitle>
    <ContactLinks>
      <ContactItem>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:hubertusmariabond@gmail.com?subject=Contact&body=Hi Mike, %0D%0A"
        >
          <Icon src="/email.svg" alt="send email" />
          <Label>Email</Label>
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mike-bond-3258a32a/"
        >
          <Icon src="/linkedin.svg" alt="LinkedIn" />
          <Label>LinkedIn</Label>
        </a>
      </ContactItem>
    </ContactLinks>
    <SubTitle>OTHER LINKS</SubTitle>
    <ContactLinks>
      <ContactItem>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.flickr.com/photos/7363277@N07"
        >
          <Icon src="/camera.svg" alt="Flickr.com" />
          <Label>Photography</Label>
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://soundcloud.com/mike-bond-sound/tracks"
        >
          <Icon src="/soundcloud.svg" alt="Soundcloud" />
          <Label>Soundcloud</Label>
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://soundcloud.com/towardstheartist/sets/set1"
        >
          <Icon src="/towards_the_artist.svg" alt="Towards the Artist" />
          <Label>Towards the Artist</Label>
        </a>
      </ContactItem>
    </ContactLinks>
  </ContactPage>
);

export default Contact;
