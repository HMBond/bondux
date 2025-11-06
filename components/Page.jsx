import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta.jsx';
import Nav from './Nav';
import Keyboard from './helpers/Keyboard';
import Logo from './styled/Logo.jsx';
import { devMode, theme } from './styled/Theme';
import WhiteSpace from './styled/WhiteSpace.jsx';

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background-color: ${(props) => props.theme.colors.bg};
    --theme-foreground-color: ${(props) => props.theme.colors.primary};
    --theme-accent-color: ${(props) => props.theme.colors.accent};
  }

  body {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const StyledPage = styled.main`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: grid;
  justify-items: center;
  padding: 0 2rem;
`;

const Header = styled.header`
  display: grid;
  justify-items: center;
  width: 100%;
  padding: 0 2rem;
`;

const Page = ({ children, context }) => {
  return (
    <ThemeProvider theme={context.devMode ? devMode(theme) : theme}>
      <Header>
        <Logo />
      </Header>
      <StyledPage>
        <Meta />
        <Keyboard context={context} />
        <GlobalStyle />
        {children}
        <WhiteSpace />
      </StyledPage>
      <Nav />
    </ThemeProvider>
  );
};

export default Page;
