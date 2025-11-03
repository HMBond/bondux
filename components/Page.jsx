import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta.jsx';
import Nav from './Nav';
import Keyboard from './helpers/Keyboard';
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
    font-size: 1em;
    font-family: 'DejaVu Extra Light';
    margin: 0;
    cursor: default;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent};
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 420px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 370px) {
    html {
      font-size: 12px;
    }
  }
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: hidden;
`;

const Page = ({ children, context }) => {
  return (
    <ThemeProvider theme={context.devMode ? devMode(theme) : theme}>
      <StyledPage>
        <Meta />
        <Keyboard context={context} />
        <GlobalStyle />
        {children}
        <WhiteSpace />
        <Nav />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
