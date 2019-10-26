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
    this.setState(prevState => {
      if (prevState.nav.currentPath !== Router.router.pathname) {
        return {
          ...prevState,
          nav: {
            ...prevState.nav,
            currentPath: Router.router.pathname
          }
        };
      }
    });
  };

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
    this.updateCurrentPath();
  };

  navigate = advance => {
    const index = content.indexOf(
      content.find(page => page.url === Router.router.pathname)
    );
    this.setState(prevState => {
      Router.push(content[constrain(index + advance, content.length)].url);
    });
    this.updateCurrentPath();
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
