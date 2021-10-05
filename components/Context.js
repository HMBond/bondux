import { Component, createContext } from 'react';
import Router from 'next/router';
import { values, throttle } from 'lodash';
import content from '../content.yml';

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
        setPosition: this.setSelectorPos,
        go: () => this.visitSelection(),
      },
      nav: {
        currentPath: null,
        pageList: [content.index, content.skills, content.contact],
        onFirstPage: true,
        onLastPage: true,
        back: () => this.navigate(-1),
        forward: () => this.navigate(1),
        open: false,
        setOpen: (bool) => this.setNavOpen(bool),
      },
      content: content,
    };
  }

  componentDidUpdate() {
    this.updateRoutingState();
  }
  componentDidMount() {
    this.updateRoutingState();
  }

  updateRoutingState = () => {
    this.state.nav.currentPath !== Router.router.pathname &&
      this.setState((prevState) => ({
        ...prevState,
        nav: {
          ...prevState.nav,
          currentPath: Router.router.pathname,
          onFirstPage: Router.router.pathname == content.index.url,
          onLastPage: Router.router.pathname == content.contact.url,
        },
      }));
  };

  toggleDevMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      devMode: !prevState.devMode,
    }));
  };

  setSelectorPos = (newPosition) => {
    if (this.state.nav.pageList[newPosition]) {
      this.setState((prevState) => ({
        ...prevState,
        selector: {
          ...prevState.selector,
          position: newPosition,
        },
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

  navigate = (advance) => {
    let toIndex = this.getPageIndex(advance);
    Router.push(this.state.nav.pageList[toIndex].url);
    this.setNavOpen(false);
  };

  setNavOpen = throttle(
    (bool) =>
      this.setState((prevState) => ({
        ...prevState,
        nav: {
          ...prevState.nav,
          open: bool,
        },
      })),
    400,
    { leading: true, trailing: false }
  );

  getPageIndex(advance) {
    const pageList = this.state.nav.pageList;
    const currentPageIndex = pageList.indexOf(
      pageList.find((page) => page.url === this.state.nav.currentPath)
    );
    let toIndex = currentPageIndex;
    if (
      advance > 0 &&
      currentPageIndex + advance < this.state.nav.pageList.length
    ) {
      toIndex++;
    } else if (advance < 0 && currentPageIndex + advance >= 0) {
      toIndex--;
    }
    return toIndex;
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}
