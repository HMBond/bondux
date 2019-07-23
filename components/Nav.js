import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import MenuSvg from "../static/menu-toggle.svg";

const NavPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  overflow: scroll;
  margin-left: 25px;
  margin-top: 25px;
`;

const MenuItem = styled.a`
  width: 250px;
  padding: 5px;
  background: blue;
`;

const MenuToggle = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
`;

const MenuToggleIcon = styled(MenuSvg)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  fill: white;
  stroke: white;
  transform: ${props => (props.open ? "rotate(-540deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const MenuToggleBall = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => (props.open ? "orange" : "#4a4a4a")};
  transform: ${props => (props.open ? "scale(30)" : "scale(1)")};
  transition: transform 0.5s ease-in-out, background-color 0.2s ease-in;
`;

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }
  onToggleNav = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  preventBubbling = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div>
        <MenuToggle onClick={this.onToggleNav}>
          <MenuToggleBall open={this.state.toggle} />
          <MenuToggleIcon open={this.state.toggle} />
        </MenuToggle>
        {this.state.toggle && (
          <NavPage onClick={this.onToggleNav}>
            <Menu onClick={this.preventBubbling}>
              <MenuItem onClick={this.onToggleNav}>hide</MenuItem>
              <MenuItem onClick={this.onToggleNav}>hide</MenuItem>
              <MenuItem onClick={this.onToggleNav}>hide</MenuItem>
              <MenuItem onClick={this.onToggleNav}>hide</MenuItem>
              <Link href="/">
                <MenuItem>index</MenuItem>
              </Link>
              <Link href="/blog">
                <MenuItem>blog</MenuItem>
              </Link>
            </Menu>
          </NavPage>
        )}
      </div>
    );
  }
}

export default Nav;
