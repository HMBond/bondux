import { Component } from "react";
import Context from "./Context";
import styled from "styled-components";
import debounce from "lodash/debounce";

import Logo from "./styles/Logo.js";
import NavItem from "./styles/NavItem";
import {
  NavToggleButton,
  NavBackButton,
  NavForwardButton
} from "./styles/NavButtons";

const NavItems = [
  { name: "Intro", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Skills", url: "/skills" },
  { name: "Hire Me!", url: "/contact" }
];

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
  }

  onToggleNav = debounce(
    ({ toggleNav }) => {
      toggleNav();
    },
    500,
    { leading: true, trailing: false }
  );

  render() {
    return (
      <Context.Consumer>
        {context => (
          <NavBase>
            <NavBackButton />
            <NavToggleButton
              open={context.navOpen}
              onClick={() => this.onToggleNav(context)}
            />
            <NavForwardButton />
            <NavPage
              open={context.navOpen}
              onClick={() => this.onToggleNav(context)}
            >
              <Logo extra light />
              <NavMenu>
                {NavItems.map(
                  (item, index) =>
                    context.createSelectable(item.url) && (
                      <NavItem
                        item={item}
                        key={index}
                        selected={index === context.selector}
                        select={() => context.setSelector(index)}
                      />
                    )
                )}
              </NavMenu>
            </NavPage>
          </NavBase>
        )}
      </Context.Consumer>
    );
  }
}

export default Nav;
