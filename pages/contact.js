import styled from "styled-components";
import {
  Title,
  Heading,
  SubHeading,
  HoverLabel
} from "../components/styles/Text";

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

const ContactHeading = styled(Heading)`
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
`;

const Icon = styled.div`
  background: url(${props => props.src});
  background-size: cover;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
`;

const Contact = () => (
  <ContactPage>
    <SubHeading>{"Please get in "}</SubHeading>
    <ContactTitle extraLarge>{"contact"}</ContactTitle>
    <ContactHeading>{" with me!"}</ContactHeading>
    <ContactLinks>
      <ContactItem>
        <a
          target={"_blank"}
          href={
            "mailto:post@bondux.dev?subject=Contact&body=Hi Mike, ...%0D%0A%0D%0A%0D%0A%0D%0A"
          }
        >
          <Icon src={"../static/email.svg"} />
          <HoverLabel>{"Email"}</HoverLabel>
        </a>
      </ContactItem>
      <ContactItem>
        <a
          target={"_blank"}
          href={
            "https://api.whatsapp.com/send?phone=31654356094&text=Hi%20mike"
          }
        >
          <Icon src={"../static/phone.svg"} />
          <HoverLabel>{"WhatsApp"}</HoverLabel>
        </a>
      </ContactItem>
      <ContactItem>
        <a target={"_blank"} href={"https://www.flickr.com/photos/7363277@N07"}>
          <Icon src={"../static/camera.svg"} />
          <HoverLabel>{"Photography"}</HoverLabel>
        </a>
      </ContactItem>
    </ContactLinks>
  </ContactPage>
);

export default Contact;
