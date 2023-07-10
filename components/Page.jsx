import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta.jsx';
import Nav from './Nav';
import Keyboard from './helpers/Keyboard';
import { devMode, theme } from './styled/Theme';

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
    margin: 0px;
    cursor: default;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  a {
    text-decoration: none;
    color: inherit;
    color: ${(props) => props.theme.colors.accent};
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
  align-items: center;
  width: 100%;
  /* prevent scrollbar shifting page/nav */
  padding-left: calc(100vw - 100%);
`;

const Page = ({ children, context }) => {
  return (
    <ThemeProvider theme={context.devMode ? devMode(theme) : theme}>
      <StyledPage>
        <Meta />
        <Keyboard context={context} />
        <GlobalStyle />
        {children}
        <Nav />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
