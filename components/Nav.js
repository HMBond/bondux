import React, { Component } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";
import Link from "next/link";
import NavSvg from "../static/nav-toggle.svg";

const NavItems = [
  { name: "Intro", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Skills", url: "/skills" },
  { name: "Hire Me!" }
];

const NavBase = styled.div``;

const NavPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  cursor: alias;
  opacity: ${props => (props.open ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  z-index: ${props => (props.open ? "1" : "-1")};
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

const NavItem = styled.span`
  font-family: "DejaVu Serif";
  color: white;
  font-size: 1.5em;
  width: max-content;
  padding: 10px;
  border: solid;
  margin: 10px;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? "rgba(0,0,0,0.2)" : "transparent"};
  :nth-child(odd) {
    align-self: flex-end;
  }
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
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selector: 0
    };
  }
  onToggleNav = debounce(
    () => {
      this.setState(prevState => ({
        open: !prevState.open
      }));
    },
    500,
    { leading: true, trailing: false }
  );

  render() {
    return (
      <NavBase>
        <NavToggleBase>
          <NavToggleBall open={this.state.open} onClick={this.onToggleNav} />
          <NavToggleIcon open={this.state.open} onClick={this.onToggleNav} />
        </NavToggleBase>
        <NavPage open={this.state.open} onClick={this.onToggleNav}>
          <NavMenu>
            {NavItems.map(({ name, url }, index) => (
              <Link href={url || "/"}>
                <NavItem selected={this.selectorId == this.state.selector}>
                  {name}
                </NavItem>
              </Link>
            ))}
          </NavMenu>
        </NavPage>
      </NavBase>
    );
  }
}

export default Nav;
