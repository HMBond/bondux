import { ThemeProvider, createGlobalStyle } from "styled-components";
import Nav from "./Nav.js";
import Meta from "./Meta.js";
import Logo from "./styles/Logo.js";

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

  body {
    color: ${props => props.theme.black};
    font-size: 1.2em;
    font-family: 'DejaVu Extra Light';
  }
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Meta />
      <GlobalStyle />
      <Nav />
      <Logo />
      <div>{props.children}</div>
    </div>
  </ThemeProvider>
);

export default Page;
