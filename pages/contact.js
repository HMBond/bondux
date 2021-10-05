import styled from 'styled-components';
import { Title, SubTitle, Label } from '../components/styles/Headings';

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

const ContactSuperTitle = styled(SubTitle)``;

const ContactTitle = styled(Title)`
  margin-top: 4rem;
`;

const ContactLinks = styled.div`
  margin: 4rem 2rem 2rem 2rem;
`;

const ContactItem = styled.div`
  a {
    display: flex;
    align-items: center;
    line-height: 4rem;
  }
  @media screen and (pointer: fine) {
    /* only cursor operated devices */
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
    <ContactTitle>{'Contact'}</ContactTitle>
    <ContactSuperTitle>{"LET'S CHAT"}</ContactSuperTitle>
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
          href={
            'https://api.whatsapp.com/send?phone=31654356094&text=Hi%20Mike'
          }
        >
          <Label>{'WhatsApp'}</Label>
          <Icon src={'/phone.svg'} alt="WhatsApp" />
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target={'_blank'}
          rel="noreferrer"
          href={'https://www.flickr.com/photos/7363277@N07'}
        >
          <Label>{'Photography'}</Label>
          <Icon src={'/camera.svg'} alt="Photography Page" />
        </a>
      </ContactItem>
    </ContactLinks>
  </ContactPage>
);

export default Contact;
