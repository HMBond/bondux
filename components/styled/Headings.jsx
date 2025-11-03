import styled from 'styled-components';

export const Title = styled.span`
  font-family: 'DejaVu Serif';
  font-size: ${(props) =>
    props.extraLarge ? '5.6rem' : props.large ? '4rem' : '2.8rem'};
`;

export const PageTitle = styled(Title)`
  margin-top: 4rem;
`;

export const SubTitle = styled.span`
  color: ${(props) => props.theme.colors.accent};
  font-family: 'DejaVu Extra Light';
  font-size: 1.4rem;
  margin: 1rem;
`;

export const Heading = styled.span`
  font-family: 'DejaVu Serif';
  font-size: 2.8rem;
  margin: 1rem;
`;

export const SmallHeading = styled.h6`
  font-family: 'DejaVu Serif';
  font-size: 1.4rem;
  margin: 1rem 1rem 0;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.colors.accent};
  font-size: 1.4rem;
  font-weight: bolder;
  cursor: pointer;
`;
