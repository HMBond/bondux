import styled from "styled-components";
import { Title, Heading, SubHeading, Label } from "../components/styles/Text";

const ContactPage = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled(Title)`
  display: block;
  margin-bottom: 0.4rem;
  align-self: center;
`;

const FlexEndHeading = styled(Heading)`
  align-self: flex-end;
`;

const ContactLinks = styled.div`
  margin-top: 4rem;
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
  background-size: cover;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
  border-radius: 50%;
  border: 0px solid ${props => props.theme.colors.accent};
`;

const Contact = () => (
  <ContactPage>
    <SubHeading>{"Please get in "}</SubHeading>
    <ContactTitle extraLarge>{"contact"}</ContactTitle>
    <FlexEndHeading>{" with me!"}</FlexEndHeading>
    <ContactLinks>
      <ContactItem>
        <a
          target={"_blank"}
          href={
            "mailto:post@bondux.dev?subject=Contact&body=Hi Mike, ...%0D%0A%0D%0A%0D%0A%0D%0A"
          }
        >
          <Icon src={"/email.svg"} />
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
          <Icon src={"/phone.svg"} />
          <Label>{"WhatsApp"}</Label>
        </a>
      </ContactItem>
      <ContactItem>
        <a target={"_blank"} href={"https://www.flickr.com/photos/7363277@N07"}>
          <Icon src={"/camera.svg"} />
          <Label>{"Photography"}</Label>
        </a>
      </ContactItem>
    </ContactLinks>
  </ContactPage>
);

export default Contact;
