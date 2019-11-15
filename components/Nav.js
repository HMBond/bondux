import { Component } from "react";
import Context from "./Context";
import styled from "styled-components";
import debounce from "lodash/debounce";
import uniqid from "uniqid";

import Logo from "./styles/Logo.js";
import NavItem from "./styles/NavItem";
import { NavBackIcon, NavForwardIcon, NavToggleIcon } from "./styles/NavIcons";
import { NavButton } from "./styles/NavButton";

const NavBase = styled.div`
  opacity: ${props => (props.ssrReady ? "1" : "0")};
  transition: opacity 0.3s ease-in;
  position: fixed;
  bottom: -1px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 400px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      ${props => props.theme.colors.bg} 2px,
      ${props => props.theme.colors.bg} 4px
    ),
    linear-gradient(transparent, ${props => props.theme.colors.bg}),
    linear-gradient(transparent, ${props => props.theme.colors.bg});
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
  margin: auto;
  width: 250px;
  user-select: none;
`;

class Nav extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      ssrReady: false,
      properlyClosed: true
    };
  }

  setProperlyClosed = debounce(properlyClosed => {
    this.setState(prevstate => ({
      ...prevstate,
      properlyClosed: properlyClosed
    }));
  }, 500);

  componentDidMount() {
    this.setState(prevstate => ({ ...prevstate, ssrReady: true }));
  }

  render() {
    const { ssrReady, properlyClosed } = this.state;

    return (
      <Context.Consumer>
        {context => (
          <NavBase ssrReady={ssrReady}>
            <NavBackIcon
              hidden={
                context.nav.currentPath === context.content[0].url ||
                context.nav.open
              }
              onClick={() => context.nav.back()}
              order={1}
            ></NavBackIcon>
            <NavForwardIcon
              hidden={
                context.nav.currentPath ===
                  context.content[context.content.length - 1].url ||
                context.nav.open
              }
              onClick={() => context.nav.forward()}
              order={3}
            ></NavForwardIcon>
            <NavButton
              open={context.nav.open}
              properlyClosed={properlyClosed}
              onClick={() => {
                this.setProperlyClosed(false);
                context.nav.setOpen(true);
              }}
              order={2}
            >
              <NavToggleIcon open={context.nav.open} />
            </NavButton>
            <NavPage
              open={context.nav.open}
              onClick={() => {
                this.setProperlyClosed(true);
                context.nav.setOpen(false);
              }}
            >
              <Logo light />
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
