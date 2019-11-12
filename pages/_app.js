import React from "react";
import App from "next/app";
import Page from "../components/Page";

import { ContextProvider } from "../components/Context";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <ContextProvider>
        <Page>
          <Component />
        </Page>
      </ContextProvider>
    );
  }
}

export default MyApp;
