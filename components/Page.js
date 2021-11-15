import Context from '../components/Context';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Meta from './Meta.js';
import Keyboard from './helpers/Keyboard';
import { theme, devMode } from './styled/Theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DejaVu Extra Light';
    src: url('/fonts/DejaVuSans-ExtraLight.woff2') format('woff2');
    font-weight: lighter;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'DejaVu Serif';
    src: url('/fonts/DejaVuSerifCondensed-Bold.woff2') format('woff2');
    font-weight: bolder;
    font-style: serif;
    font-display: block;
  }

  @font-face {
    font-family: 'DejaVu Condensed Bold';
    src: url('/fonts/DejaVuSansCondensed-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'DejaVu Condensed';
    src: url('/fonts/DejaVuSansCondensed.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

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
    *:not(input, p) {
      user-select: none;
    }
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

const Page = ({ children }) => {
  return (
    <Context.Consumer>
      {(context) => (
        <ThemeProvider theme={context.devMode ? devMode(theme) : theme}>
          <StyledPage>
            <Meta />
            <Keyboard context={context} />
            <GlobalStyle />
            {children}
            <Nav />
          </StyledPage>
        </ThemeProvider>
      )}
    </Context.Consumer>
  );
};

export default Page;
