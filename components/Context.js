import { Component, createContext } from "react";
import Router from "next/router";
import { values, reduce, debounce, first, last } from "lodash";
import content from "../public/content.yml";
import { constrain, getFirstPropertyOfObject } from "./helpers/functions";

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
        go: () => this.visitSelection()
      },
      nav: {
        currentPath: null,
        pageList: values(content),
        onFirstPage: true,
        onLastPage: true,
        back: () => this.navigate(-1),
        forward: () => this.navigate(1),
        open: false,
        setOpen: bool => this.setNavOpen(bool)
      },
      content: content
    };
  }

  componentDidUpdate() {
    this.updateCurrentPath();
  }
  componentDidMount() {
    this.updateCurrentPath();
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }

  updateCurrentPath = () => {
    this.state.nav.currentPath !== Router.router.pathname &&
      this.setState(prevstate => ({
        ...prevstate,
        nav: {
          ...prevstate.nav,
          currentPath: Router.router.pathname,
          onFirstPage: Router.router.pathname == content.index.url,
          onLastPage: Router.router.pathname == content.contact.url
        }
      }));
  };

  toggleDevMode = () => {
    this.setState(prevstate => ({
      ...prevstate,
      devMode: !prevstate.devMode
    }));
  };

  setSelectorPos = newPosition => {
    if (this.state.nav.pageList[newPosition]) {
      this.setState(prevstate => ({
        ...prevstate,
        selector: {
          ...prevstate.selector,
          position: newPosition
        }
      }));
    }
  };

  visitSelection = () => {
    const selectedIndex = this.state.selector.position;
    const go = () => Router.push(this.state.nav.pageList[selectedIndex].url);
    setTimeout(go, 100);
    Router.prefetch(this.state.nav.pageList[selectedIndex].url);
    this.setNavOpen(false);
  };

  navigate = advance => {
    const pageList = this.state.nav.pageList
    const currentPageIndex = pageList.indexOf(
      pageList.find(page => page.url === this.state.nav.currentPath)
    );
    const nextIndex = constrain(currentPageIndex + advance, content.length);
    const url = this.state.nav.pageList[nextIndex].url
    Router.push(url);
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
