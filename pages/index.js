import { Fragment, useEffect } from "react";

import Logo from "../components/styles/Logo.js";
import Introduction from "../components/Introduction.js";
import WhiteSpace from "../components/styles/WhiteSpace.js";

const Index = ({ context }) => {
  const setLocation = (title, newLocation) => {
    if (location.pathname !== newLocation) {
      history.replaceState({}, title, newLocation);
    }
  };

  useEffect(() => {
    setLocation("Bondux.dev", "/");
  });

  return (
    <Fragment>
      <Logo />
      <WhiteSpace />
      {false && <Introduction introductionLines={context} />}
    </Fragment>
  );
};

export default Index;
