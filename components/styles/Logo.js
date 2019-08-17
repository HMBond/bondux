import { Component } from "react";
import styled from "styled-components";
import LogoIcon from "../../static/bondux.svg";
import { TimelineLite } from "gsap/umd/TweenMax";
import debounce from "lodash/debounce";

const StyledLogo = styled(({ extra, light, ...rest }) => (
  <LogoIcon {...rest} />
))`
  max-width: 500px;
  align-self: center;
  .bondux_svg__svg-dark {
    fill: ${props => (props.light ? "white" : "#4A4A49")};
  }
  .bondux_svg__svg-orange {
    fill: ${props => (props.light ? "#4A4A49" : "#F5A100")};
    fill: ${props => (props.extra && props.light ? "white" : "")};
  }
  .bondux_svg__svg-dark-stroke {
    stroke: ${props => (props.light ? "white" : "#4A4A49")};
  }
  .bondux_svg__stroke-animation {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: dash 1s ease-in 1s forwards normal;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.logoTween = null;
  }
  moveEye = debounce(
    (className, left, top) => {
      this.logoTween.to(className, 0.5, {
        rotation: (Math.atan2(top, left) * 180) / Math.PI,
        transformOrigin: "5px 50%"
      });
    },
    100,
    { leading: false, trailing: true }
  );

  componentDidMount() {
    this.logoTween = new TimelineLite({ paused: false });
    document.addEventListener("mousemove", event => {
      let x = event.pageX;
      let y = event.pageY;
      let eye = document.getElementsByClassName("bondux_svg__left-eye")[0];
      let offsets = eye.getBoundingClientRect();
      let left = x - offsets.left;
      let top = y - offsets.top;
      console.log({ left, top });
      this.moveEye(".bondux_svg__left-eye", left, top);
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove");
  }

  render() {
    return <StyledLogo {...this.props} />;
  }
}

export default Logo;
