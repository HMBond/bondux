import { Component } from 'react';

class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  keyUpHandler = ({ key }) => {
    const { selector, nav, toggleDevMode } = this.props.context;
    switch (key) {
      case 'ArrowUp':
        selector.setPosition(selector.position - 1);
        return;
      case 'ArrowDown':
        selector.setPosition(selector.position + 1);
        return;
      case 'ArrowLeft':
        nav.back();
        return;
      case 'ArrowRight':
        nav.forward();
        return;
      case 'Enter':
        selector.go();
        return;
      case 'Escape':
        nav.setOpen(!nav.open);
        return;
      case 'D':
        toggleDevMode();
        return;
      default:
        return;
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    return null;
  }
}

export default Keyboard;
