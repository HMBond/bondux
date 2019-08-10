import { Component, createContext } from "react";
import Router from "next/router";
import debounce from "lodash/debounce";

import SelectorKeyboardControl from "./styles/SelectorKeyboardControl";
import content from "../Content";

const Context = createContext();

export default Context;

export class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      selector: {
        position: 0,
        setPosition: newPosition => {
          if (content[newPosition]) {
            this.setState(prevstate => ({
              ...prevstate,
              selector: {
                ...prevstate.selector,
                position: newPosition
              }
            }));
          }
        },
        go: () => {
          this.setState(prevstate => {
            Router.push(content[prevstate.selector.position].url);
            return {
              ...prevstate,
              nav: { ...prevstate.nav, open: false }
            };
          });
        }
      },
      nav: {
        open: false,
        toggleNav: debounce(
          () =>
            this.setState(prevstate => ({
              ...prevstate,
              nav: {
                ...prevstate.nav,
                open: !prevstate.nav.open
              }
            })),
          400,
          { leading: true, trailing: false }
        )
      },
      content
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        <SelectorKeyboardControl />
        {children}
      </Context.Provider>
    );
  }
}
