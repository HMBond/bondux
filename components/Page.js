import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Context from "./Context";
import Nav from "./Nav.js";
import WhiteSpace from "./styles/WhiteSpace";
import Meta from "./Meta.js";
import Keyboard from "./helpers/Keyboard";
import { theme, invertTheme } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-background-color: ${props => props.theme.colors.bg};
    --main-foreground-color: ${props => props.theme.colors.primary};
    --main-accent-color: ${props => props.theme.colors.accent};
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
        <ThemeProvider theme={context.themeInvert ? invertTheme(theme) : theme}>
          <StyledPage>
            <Meta />
            <Keyboard />
            <GlobalStyle />
            {props.children}
            <WhiteSpace />
            <Nav />
          </StyledPage>
        </ThemeProvider>
      )}
    </Context.Consumer>
  );
};

export default Page;
