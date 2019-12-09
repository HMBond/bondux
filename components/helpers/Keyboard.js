import React, { Component } from "react";

class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  keyUpHandler = ({ key }) => {
    const { selector, nav, toggleDevMode } = this.props.context;
    if (key == "ArrowUp") {
      selector.setPosition(selector.position - 1);
    } else if (key == "ArrowDown") {
      selector.setPosition(selector.position + 1);
    } else if (key == "ArrowLeft") {
      nav.back();
    } else if (key == "ArrowRight") {
      nav.forward();
    } else if (key == "Enter") {
      selector.go();
    } else if (key == "Escape") {
      nav.setOpen(!nav.open);
    } else if (key == "d") {
      toggleDevMode();
    }
  };

  componentDidMount() {
    document.addEventListener("keyup", this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyUpHandler);
  }

  render() {
    return null;
  }
}

export default ({ context }) => <Keyboard context={context} />;
