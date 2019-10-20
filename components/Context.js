import { Component, createContext } from "react";
import Router from "next/router";
import debounce from "lodash/debounce";
import content from "../content.yml";

const Context = createContext();

export default Context;

export class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      devMode: true,
      toggleDevMode: () =>
        this.setState(prevstate => ({
          ...prevstate,
          devMode: !prevstate.devMode
        })),
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
              nav: {
                ...prevstate.nav,
                open: false
              }
            };
          });
        }
      },

      nav: {
        back: () => Router.back(),
        forward: () => console.log("next page"),
        open: false,
        setOpen: debounce(
          open =>
            this.setState(prevstate => ({
              ...prevstate,
              nav: {
                ...prevstate.nav,
                open: open
              }
            })),
          400,
          { leading: true, trailing: false }
        )
      },
      content
    };
  }

  componentDidMount() {
    window.context = this.state;
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}
