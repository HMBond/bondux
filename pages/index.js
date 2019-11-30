import { Fragment, useEffect } from "react";

import Logo from "../components/styles/Logo.js";
import Introduction from "../components/Introduction.js";
import Context from "../components/Context";
import WhiteSpace from "../components/styles/WhiteSpace.js";

const Index = () => {
  const setLocation = (title, newLocation) => {
    if (location.pathname !== newLocation) {
      history.replaceState({}, title, newLocation);
    }
  };

  useEffect(() => {
    setLocation("Bondux.dev", "/");
  });

  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <Logo />
          <WhiteSpace />
          <Introduction context={context} />
        </Fragment>
      )}
    </Context.Consumer>
  );
};

export default Index;
