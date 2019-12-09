import styled from "styled-components";

const Paragraph = styled.div`
  max-width: ${props => props.theme.maxWidth};
  align-self: flex-start;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p:first-letter {
    font-size: 2rem;
    font-family: "DejaVu Serif";
    color: ${props => props.theme.colors.primary + "80"};
  }
  & *:not(p):first-letter {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }
`;

export const ParagraphText = styled.p`
  margin: 1rem 2rem 4rem 2rem;
  line-height: 1.8rem;
  @media screen and (min-width: 600px) {
    margin: 1rem 0 4rem;
  }
`;

export const ParagraphHeading = styled.span`
  font-family: "DejaVu Serif";
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
`;

export default Paragraph;
