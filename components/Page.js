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

  body {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.primary};
    font-size: 1em;
    font-family: 'DejaVu Extra Light';
    margin: 0px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    color: ${props => props.theme.colors.accent};
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
