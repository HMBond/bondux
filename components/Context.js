import { Component, createContext } from "react";
import Router from "next/router";
import debounce from "lodash/debounce";
import content from "../content.yml";
import { constrain } from "./helpers/functions";
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
        back: () => this.navigate(-1),
        forward: () => this.navigate(1),
        open: false,
        setOpen: bool => this.setNavOpen(bool)
      },
      content
    };
  }

  componentDidMount() {
    this.updateCurrentPath();
  }

  componentDidUpdate() {
    this.updateCurrentPath();
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }

  updateCurrentPath = () => {
    this.setState(prevstate => {
      if (prevstate.nav.currentPath !== Router.router.pathname) {
        return {
          ...prevstate,
          nav: {
            ...prevstate.nav,
            currentPath: Router.router.pathname
          }
        };
      }
    });
  };

  toggleDevMode = () => {
    this.setState(prevstate => ({
      ...prevstate,
      devMode: !prevstate.devMode
    }));
  };

  setSelectorPos = newPosition => {
    if (content[newPosition]) {
      this.setState(prevstate => ({
        ...prevstate,
        selector: {
          ...prevstate.selector,
          position: newPosition
        }
      }));
    }
  };

  visitSelectionAndCloseNav = () => {
    this.setState(prevstate => {
      const go = () => Router.push(content[prevstate.selector.position].url);
      setTimeout(go, 100);
      Router.prefetch(content[prevstate.selector.position].url);
      return {
        ...prevstate,
        nav: {
          ...prevstate.nav,
          open: false
        }
      };
    });
    this.updateCurrentPath();
  };

  navigate = advance => {
    const currentPageIndex = content.indexOf(
      content.find(page => page.url === Router.router.pathname)
    );
    this.setState(prevstate => {
      Router.push(
        content[constrain(currentPageIndex + advance, content.length)].url
      );
    });
    this.updateCurrentPath();
    this.setNavOpen(false);
  };

  setNavOpen = debounce(
    bool =>
      this.setState(prevstate => ({
        ...prevstate,
        nav: {
          ...prevstate.nav,
          open: bool
        }
      })),
    400,
    { leading: true, trailing: false }
  );
}
