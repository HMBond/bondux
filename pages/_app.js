import React from "react";
import App, { Container } from "next/app";
import Page from "../components/Page";

import { ContextProvider } from "../components/Context";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <ContextProvider>
          <Page>
            <Component />
          </Page>
        </ContextProvider>
      </Container>
    );
  }
}

export default MyApp;
