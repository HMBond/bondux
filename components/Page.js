import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Nav from "./Nav.js";
import WhiteSpace from "./styles/WhiteSpace";
import Meta from "./Meta.js";
import Keyboard from "./helpers/Keyboard";

const theme = {
  black: "#4A4A4A",
  orange: "#F5A100",
  green: "#ED90ED",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const GlobalStyle = createGlobalStyle`
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
    color: ${props => props.theme.black};
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
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Keyboard />
        <GlobalStyle />
        {props.children}
        <WhiteSpace />
        <Nav />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
