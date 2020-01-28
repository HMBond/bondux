import { Component, createContext } from "react";
import Router from "next/router";
import { values, reduce, debounce, first, last } from "lodash";
import content from "../public/content.yml";
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
        go: () => this.visitSelection()
      },
      nav: {
        currentPath: null,
        onFirstPage: true,
        onLastPage: true,
        back: () => this.navigate(-1),
        forward: () => this.navigate(1),
        open: false,
        setOpen: bool => this.setNavOpen(bool)
      },
      content: values(content),
      pages: reduce(content, (pages, page) => {
        Object.assign(pages, page);
        return pages;
      })
    };
  }

  componentDidUpdate() {
    console.log(this.state);
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
          onFirstPage: Router.router.pathname == first(content).url,
          onLastPage: Router.router.pathname == last(content).url
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

  visitSelection = () => {
    const go = () => Router.push(content[prevstate.selector.position].url);
    setTimeout(go, 100);
    Router.prefetch(content[prevstate.selector.position].url);
    this.setNavOpen(false);
  };

  navigate = advance => {
    const currentPageIndex = content.indexOf(
      content.find(page => page.url === Router.router.pathname)
    );
    const newIndex = constrain(currentPageIndex + advance, content.length);
    Router.push(content[newIndex].url);
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
