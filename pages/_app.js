import React from "react";
import App from "next/app";
import Page from "../components/Page";

import Context, { ContextProvider } from "../components/Context";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <ContextProvider>
        <Context.Consumer>
          {context => (
            <Page context={context}>
              <Component context={context} />
            </Page>
          )}
        </Context.Consumer>
      </ContextProvider>
    );
  }
}

export default MyApp;
