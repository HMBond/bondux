import { Component, createContext } from "react";
import Router from "next/router";
import debounce from "lodash/debounce";
import content from "../content.yml";
import constrain from "./helpers/constrain";
const Context = createContext();

export default Context;

export class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      devMode: false,
      toggleDevMode: () => this.toggleDevMode(),
      selector: {
        position: 0,
        setPosition: newPosition => this.setSelectorPos(newPosition),
        go: () => this.visitSelectionAndCloseNav()
      },

      nav: {
        currentPath: "/",
        currentPos: 0,
        back: () => this.navigate(-1),
        forward: () => this.navigate(1),
        open: false,
        setOpen: bool => this.setNavOpen(bool)
      },
      content
    };
  }

  componentDidMount() {
    this.setNavCurrentPos();
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }

  setNavCurrentPos() {
    this.setState(prevState => ({
      ...prevState,
      nav: {
        ...prevState.nav,
        currentPath: window.location.pathname,
        currentPos: content.indexOf(
          content.find(page => page.url === window.location.pathname)
        )
      }
    }));
  }

  toggleDevMode = () => {
    this.setState(prevState => ({
      ...prevState,
      devMode: !prevState.devMode
    }));
  };

  setSelectorPos = newPosition => {
    if (content[newPosition]) {
      this.setState(prevState => ({
        ...prevState,
        selector: {
          ...prevState.selector,
          position: newPosition
        }
      }));
    }
  };

  visitSelectionAndCloseNav = () => {
    this.setState(prevState => {
      Router.push(content[prevState.selector.position].url);
      return {
        ...prevState,
        nav: {
          ...prevState.nav,
          open: false
        }
      };
    });
  };

  navigate = advance => {
    this.setNavCurrentPos();
    this.setState(prevState => {
      Router.push(
        content[constrain(prevState.nav.currentPos + advance, content.length)]
          .url
      );
    });
  };

  setNavOpen = debounce(
    bool =>
      this.setState(prevState => ({
        ...prevState,
        nav: {
          ...prevState.nav,
          open: bool
        }
      })),
    400,
    { leading: true, trailing: false }
  );
}
