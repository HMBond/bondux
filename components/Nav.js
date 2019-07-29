import { Component } from "react";
import Context from "./Context";
import styled from "styled-components";
import debounce from "lodash/debounce";

import Logo from "./styles/Logo.js";
import NavItem from "./styles/NavItem";
import NavSvg from "../static/nav-toggle.svg";

const NavItems = [
  { name: "Intro", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Skills", url: "/skills" },
  { name: "Hire Me!", url: "/contact" }
];

const NavBase = styled.div``;

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

const NavToggleBase = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
`;

const NavToggleIcon = styled(NavSvg)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  fill: white;
  stroke: white;
  cursor: pointer;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const NavToggleBall = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: ${props => (props.open ? "0 0 -250vh -250vh" : "10px")};
  width: ${props => (props.open ? "500vh" : "50px")};
  height: ${props => (props.open ? "500vh" : "50px")};
  border-radius: 50%;
  background-color: ${props => (props.open ? "orange" : "#4a4a4a")};
  ${props =>
    props.open
      ? "transition: all 0.5s ease-in-out, background-color 0.2s linear"
      : "transition: all 0.5s ease-in-out, background-color 0.2s linear 0.5s"};
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
            <NavToggleBase>
              <NavToggleBall
                open={context.navOpen}
                onClick={() => this.onToggleNav(context)}
              />
              <NavToggleIcon
                open={context.navOpen}
                onClick={() => this.onToggleNav(context)}
              />
            </NavToggleBase>
            <NavPage
              open={context.navOpen}
              onClick={() => this.onToggleNav(context)}
            >
              <Logo extra light />
              <NavMenu>
                {NavItems.map(
                  (item, index) =>
                    context.createSelectorId(item.url) && (
                      <NavItem
                        item={item}
                        key={index}
                        selected={index === context.selector}
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
