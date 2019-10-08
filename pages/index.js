import { Fragment } from "react";
import Logo from "../components/styles/Logo.js";
import Introduction from "../components/Introduction.js";
import Context from "../components/Context";

const Index = () => (
  <Fragment>
    <Logo />
    <Context.Consumer>
      {context => <Introduction context={context} />}
    </Context.Consumer>
  </Fragment>
);

export default Index;
