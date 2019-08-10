import React, { Component } from "react";
import Context from "../Context";

class SelectorKeyboardControl extends Component {
  constructor(props) {
    super(props);
  }

  keyUpHandler = e => {
    if (e.key == "ArrowUp") {
      this.props.context.selector.setPosition(
        this.props.context.selector.position - 1
      );
    } else if (e.key == "ArrowDown") {
      this.props.context.selector.setPosition(
        this.props.context.selector.position + 1
      );
    } else if (e.key == "Enter") {
      this.props.context.selector.go();
    } else if (e.key == "Escape") {
      this.props.context.nav.toggleNav();
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

export default props => (
  <Context.Consumer>
    {context => <SelectorKeyboardControl context={context} />}
  </Context.Consumer>
);
