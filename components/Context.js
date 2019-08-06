import { Component, createContext } from "react";
import Router from "next/router";
import SelectorKeyboardControl from "./styles/SelectorKeyboardControl";

const Context = createContext();

export default Context;

export class ContextProvider extends Component {
  constructor() {
    super();
    let selectorCollection = [];
    this.state = {
      selector: 0,
      createSelectable: url => {
        if (!selectorCollection.includes(url)) {
          selectorCollection.push(url);
        }
        return true;
      },
      setSelector: newCurrent => {
        if (selectorCollection[newCurrent]) {
          this.setState(prevstate => ({ ...prevstate, selector: newCurrent }));
        }
      },
      enterSelection: () => {
        this.setState(prevstate => {
          Router.push(selectorCollection[prevstate.selector]);
          return { ...prevstate, navOpen: false };
        });
      },
      selectorCollection,
      navOpen: false,
      toggleNav: () =>
        this.setState(prevstate => {
          return {
            ...prevstate,
            navOpen: !prevstate.navOpen
          };
        })
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
