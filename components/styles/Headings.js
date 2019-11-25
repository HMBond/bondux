import styled from "styled-components";

export const Title = styled.span`
  font-family: "DejaVu Serif";
  font-size: ${props =>
    props.extraLarge ? "5.6rem" : props.large ? "4rem" : "2.8rem"};
  text-align: center;
`;

export const SubTitle = styled.span`
  color: ${props => props.theme.colors.accent};
  font-family: "DejaVu Extra Light";
  font-size: 1.4rem;
  text-align: center;
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
  text-align: center;
  margin: 1rem;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.accent};
  font-size: 1.4rem;
  font-weight: bolder;
  cursor: pointer;
`;
