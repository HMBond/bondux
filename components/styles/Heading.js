import styled from "styled-components";

export const Title = styled.span`
  font-family: "DejaVu Serif";
  font-size: ${props =>
    props.extraLarge ? "5.6rem" : props.large ? "4rem" : "2.8rem"};
  margin: 1rem;
`;

export const Heading = styled.span`
  font-family: "DejaVu Serif";
  font-size: 2.8rem;
  margin: 1rem;
`;

export const SubHeading = styled.span`
  font-family: "DejaVu Serif";
  font-size: 2rem;
  margin: 1rem;
`;

export const Summary = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  line-height: 1.7rem;
`;
