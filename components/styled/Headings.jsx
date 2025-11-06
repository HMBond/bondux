import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${(props) =>
    props.extraLarge ? '5.6rem' : props.large ? '4rem' : '2.8rem'};
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.accent};
  font-family: 'DejaVu Condensed';
  font-size: 1.4rem;
  margin: 1rem;
`;

export const Heading = styled.h3`
  font-size: 2.8rem;
  margin: 1rem;
`;

export const SmallHeading = styled.h6`
  font-size: 1.4rem;
  margin: 1rem 1rem 0;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.colors.accent};
  font-size: 1.2rem;
  cursor: pointer;
`;
