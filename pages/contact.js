import styled from "styled-components";
import { Title, SubTitle, Label } from "../components/styles/Headings";

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.maxWidth};
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
      color: ${props => props.theme.colors.primary};
    }
    &:hover span {
      color: ${props => props.theme.colors.accent};
    }
    div {
      transition: border 0.3s linear, background-color 0.3s linear;
      background-color: transparent;
      border: none;
    }
    &:hover div {
      background-color: ${props => props.theme.colors.accent};
      border: 5px solid ${props => props.theme.colors.accent};
      transition: border 0.3s linear;
    }
  }
`;

const Icon = styled.div`
  background: url(${props => props.src});
  background-size: contain;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
  border-radius: 50%;
  border: 0px solid ${props => props.theme.colors.accent};
`;

const Contact = ({ context }) => (
  <ContactPage>
    <ContactTitle>{"Contact"}</ContactTitle>
    <ContactSuperTitle>{"LET'S CHAT"}</ContactSuperTitle>
    <ContactLinks>
      <ContactItem>
        <a
          target={"_blank"}
          href={
            "mailto:post@bondux.dev?subject=Contact&body=Hi Mike, ...%0D%0A%0D%0A%0D%0A%0D%0A"
          }
        >
          <Icon src={"/email.svg"} alt="Gmail" />
          <Label>{"Email"}</Label>
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target={"_blank"}
          href={
            "https://api.whatsapp.com/send?phone=31654356094&text=Hi%20mike"
          }
        >
          <Icon src={"/phone.svg"} alt="WhatsApp" />
          <Label>{"WhatsApp"}</Label>
        </a>
      </ContactItem>
      <ContactItem>
        <a target={"_blank"} href={"https://www.flickr.com/photos/7363277@N07"}>
          <Icon src={"/camera.svg"} alt="Photography Page" />
          <Label>{"Photography"}</Label>
        </a>
      </ContactItem>
    </ContactLinks>
  </ContactPage>
);

export default Contact;
