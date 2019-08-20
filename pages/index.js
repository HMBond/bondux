import { Fragment } from "react";
import Logo from "../components/styles/Logo.js";
import Introduction from "../components/styles/Introduction.js";
import Context from "../components/Context";

const Index = () => (
  <Fragment>
    <Logo />
    <Context.Consumer>
      {context => (
        <Introduction introductionLines={context.content[0].introduction} />
      )}
    </Context.Consumer>
  </Fragment>
);

export default Index;
