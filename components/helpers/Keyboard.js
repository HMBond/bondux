import React, { Component } from "react";
import Context from "../Context";

class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  keyUpHandler = e => {
    const { selector, nav } = this.props.context;
    if (e.key == "ArrowUp") {
      selector.setPosition(selector.position - 1);
    } else if (e.key == "ArrowDown") {
      selector.setPosition(selector.position + 1);
    } else if (e.key == "ArrowLeft") {
      nav.back();
    } else if (e.key == "ArrowRight") {
      nav.forward();
    } else if (e.key == "Enter") {
      selector.go();
    } else if (e.key == "Escape") {
      nav.setOpen(!nav.open);
    }
  };

  componentDidMount() {
    document.addEventListener("keyup", this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyUpHandler);
  }

  render() {
    return <div />;
  }
}

export default () => (
  <Context.Consumer>
    {context => <Keyboard context={context} />}
  </Context.Consumer>
);
