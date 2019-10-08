import { Fragment } from "react";
import Logo from "../components/styles/Logo.js";
import Introduction from "../components/Introduction.js";
import Context from "../components/Context";

const Index = () => (
  <Context.Consumer>
    {context => (
      <Fragment>
        <Logo />
        <Introduction context={context} />
      </Fragment>
    )}
  </Context.Consumer>
);

export default Index;
