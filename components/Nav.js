import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import NavSvg from "../static/nav-toggle.svg";

const NavBase = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: ${props => (props.open ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  margin: 50px auto;
`;

const NavItem = styled.span`
  font-family: "DejaVu Serif";
  color: white;
  font-size: 1.5em;
  width: 250px;
  padding: 5px;
  margin: 10px;
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
      open: false
    };
  }
  onToggleNav = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <div>
        <NavToggleBase onClick={this.onToggleNav}>
          <NavToggleBall open={this.state.open} />
          <NavToggleIcon open={this.state.open} />
        </NavToggleBase>
        <NavBase onClick={this.onToggleNav} open={this.state.open}>
          <NavMenu>
            <NavItem>hide</NavItem>
            <NavItem>hide</NavItem>
            <NavItem>hide</NavItem>
            <NavItem>hide</NavItem>
            <Link href="/">
              <NavItem>index</NavItem>
            </Link>
            <Link href="/blog">
              <NavItem>blog</NavItem>
            </Link>
          </NavMenu>
        </NavBase>
      </div>
    );
  }
}

export default Nav;
