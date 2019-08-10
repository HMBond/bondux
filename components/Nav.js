import { Component } from "react";
import Context from "./Context";
import styled from "styled-components";

import Logo from "./styles/Logo.js";
import NavItem from "./styles/NavItem";
import {
  NavToggleButton,
  NavBackButton,
  NavForwardButton
} from "./styles/NavButtons";

const NavBase = styled.div`
  position: fixed;
  top: 0;
  right: 10px;
  bottom: 0;
  left: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const NavPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${props => (props.open ? "1" : "0")};
  pointer-events: ${props => (props.open ? "all" : "none")};
  transition: opacity 0.5s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  margin: auto;
  width: 250px;
  user-select: none;
`;

class Nav extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null
    };
  }

  checkLocation = () => {
    this.setState(prevstate => {
      if (prevstate.currentPage !== window.location.pathname) {
        return { currentPage: window.location.pathname };
      }
    });
  };

  componentDidMount() {
    this.checkLocation();
  }

  componentDidUpdate() {
    this.checkLocation();
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <NavBase>
            <NavBackButton hidden={this.state.currentPage === "/"} />
            <NavToggleButton
              open={context.nav.open}
              onClick={() => context.nav.toggleNav()}
            />
            <NavForwardButton
              hidden={this.state.currentPage === "contact"}
              onClick={() => console.log("go forward")}
            />
            <NavPage
              open={context.nav.open}
              onClick={() => context.nav.toggleNav()}
            >
              <Logo extra light />
              <NavMenu>
                {context.content.map((item, index) => (
                  <NavItem
                    item={item}
                    key={index}
                    selected={index === context.selector.position}
                    select={() => context.selector.setPosition(index)}
                  />
                ))}
              </NavMenu>
            </NavPage>
          </NavBase>
        )}
      </Context.Consumer>
    );
  }
}

export default Nav;
