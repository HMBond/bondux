import styled from "styled-components";
import { Title, Heading, Label } from "../components/styles/Text";
import Link from "next/link";

const ContactPage = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem;
`;

const ContactTitle = styled(Title)`
  display: block;
  margin-bottom: 0.4rem;
`;

const ContactLinks = styled.div`
  margin-top: 4rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 4rem;
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
    <Heading>{"Please get in "}</Heading>
    <ContactTitle extraLarge>{"contact"}</ContactTitle>
    <Heading>{" with me!"}</Heading>
    <ContactLinks>
      <ContactItem>
        <Icon src={"../static/email.svg"} />
        <Link href={"/contact"}>
          <Label>{"Email"}</Label>
        </Link>
      </ContactItem>
      <ContactItem>
        <Icon src={"../static/phone.svg"} />
        <Link href={"/contact"}>
          <Label>{"WhatsApp"}</Label>
        </Link>
      </ContactItem>
      <ContactItem>
        <Icon src={"../static/camera.svg"} />
        <Link href={"/contact"}>
          <Label>{"Photography"}</Label>
        </Link>
      </ContactItem>
    </ContactLinks>
  </ContactPage>
);

export default Contact;
