import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Context from "./Context";
import Nav from "./Nav.js";
import Meta from "./Meta.js";
import Keyboard from "./helpers/Keyboard";
import { theme, devMode } from "./styles/Theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background-color: ${props => props.theme.colors.bg};
    --theme-foreground-color: ${props => props.theme.colors.primary};
    --theme-accent-color: ${props => props.theme.colors.accent};
  }

  @font-face {
    font-family: 'DejaVu Serif';
    src: url('/static/DejaVuSerifCondensed-Bold.ttf') format('truetype');
    font-weight: condensed-bold;
    font-style: serif;
  }

  @font-face {
    font-family: 'DejaVu Extra Light';
    src: url('/static/DejaVuSans-ExtraLight.ttf') format('truetype');
    font-weight: extra-light;
    font-style: normal;
  }

  @font-face {
    font-family: 'DejaVu Condensed Bold';
    src: url('/static/DejaVuSansCondensed-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.primary};
    font-size: 1em;
    font-family: 'DejaVu Extra Light';
    margin: 0px;
    
    * {
        box-sizing: border-box;
      }
  }
  
  @media screen and (max-width: 420px) {
    html {
      font-size: 12px;
    }
  }

  .overflow-hidden {
    overflow: hidden;
  }
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const Page = props => {
  return (
    <Context.Consumer>
      {context => (
        <ThemeProvider theme={context.devMode ? devMode(theme) : theme}>
          <StyledPage>
            <Meta />
            <Keyboard />
            <GlobalStyle />
            {props.children}
            <Nav />
          </StyledPage>
        </ThemeProvider>
      )}
    </Context.Consumer>
  );
};

export default Page;
